<script lang="ts">
	import { onMount } from 'svelte';

	let repos: number | null = null;
	let commits: number | null = null;
	let error: string | null = null;
	let dailyCommits: number[] = [];

	onMount(async () => {
		try {
			const res = await fetch('/api/github');
			if (!res.ok) throw new Error('Fehler beim Laden der GitHub-Daten');
			const data: {
				repos: number;
				recentCommits: number;
				daily?: number[];
			} = await res.json();
			repos = data.repos;
			commits = data.recentCommits;
			dailyCommits = data.daily ?? [3, 5, 2, 0, 4, 1, 6]; // Platzhalter, falls daily fehlt
		} catch (err) {
			error = (err as Error).message;
		}
	});
</script>

<div class="space-y-3 text-sm">
	<p class="font-semibold">GitHub Aktivität</p>

	{#if error}
		<p class="text-red-500">{error}</p>
	{:else if repos !== null && commits !== null}
		<p>📁 Repositories: <strong>{repos}</strong></p>
		<p>📌 Letzte Commits: <strong>{commits}</strong></p>

		<!-- Visualisierung -->
		<div class="mt-2 flex h-16 items-end gap-1">
			{#each dailyCommits as value}
				<div
					class="w-4 rounded bg-neutral-800"
					style="height: {value * 15}px"
					title="{value} Commits"
				></div>
			{/each}
		</div>
	{:else}
		<p class="text-neutral-500">Lade Daten…</p>
	{/if}
</div>
