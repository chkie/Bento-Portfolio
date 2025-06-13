import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const username = import.meta.env.VITE_GITHUB_USERNAME;
	const token = import.meta.env.VITE_GITHUB_TOKEN;

	if (!username || !token) {
		return new Response('GitHub credentials missing', { status: 500 });
	}

	const headers = {
		Authorization: `token ${token}`,
		'User-Agent': username
	};

	try {
		const [reposRes, eventsRes] = await Promise.all([
			fetch(`https://api.github.com/users/${username}/repos`, { headers }),
			fetch(`https://api.github.com/users/${username}/events`, { headers })
		]);

		const repos = await reposRes.json();
		const events = await eventsRes.json();

		const commitEvents = events.filter((e: any) => e.type === 'PushEvent');

		// Commits insgesamt
		const totalCommits = commitEvents.reduce(
			(acc: number, e: any) => acc + e.payload.commits.length,
			0
		);

		// Commits pro Tag (letzte 7 Tage)
		const today = new Date();
		const dailyCounts: Record<string, number> = {};

		for (let i = 6; i >= 0; i--) {
			const date = new Date(today);
			date.setDate(today.getDate() - i);
			const key = date.toISOString().split('T')[0];
			dailyCounts[key] = 0;
		}

		for (const event of commitEvents) {
			const date = new Date(event.created_at).toISOString().split('T')[0];
			if (dailyCounts[date] !== undefined) {
				dailyCounts[date] += event.payload.commits.length;
			}
		}

		return new Response(
			JSON.stringify({
				repos: repos.length,
				recentCommits: totalCommits,
				daily: Object.values(dailyCounts)
			}),
			{
				headers: { 'Content-Type': 'application/json' },
				status: 200
			}
		);
	} catch (err) {
		console.error('GitHub API error:', err);
		return new Response('GitHub fetch failed', { status: 500 });
	}
};
