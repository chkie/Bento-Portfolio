<script lang="ts">
	const projects = [
		{
			name: 'Kundenportal UX-Redesign',
			role: 'Lead Frontend',
			tech: 'SvelteKit / Tailwind / REST'
		},
		{
			name: 'Monitoring Dashboard',
			role: 'Frontend Dev',
			tech: 'Vue / Chart.js / API'
		}
	];
</script>

<div
	class="card relative col-span-1 flex min-h-[22rem] flex-col gap-4
	p-6 sm:min-h-[24rem] lg:row-span-5 lg:min-h-[20rem]"
>
	<h2 class="text-xl font-semibold sm:text-2xl">Berufliche Projekte</h2>

	<ul class="flex flex-col gap-4 text-sm text-gray-700">
		{#each projects as p}
			<li>
				<p class="font-medium">{p.name}</p>
				<p class="text-xs text-gray-600 sm:text-sm">
					{p.role} – {p.tech}
				</p>
			</li>
		{/each}
	</ul>
</div>
