<script lang="ts">
	const projects = [
		{ name: 'Portfolio Generator', tech: 'SvelteKit / Tailwind' },
		{ name: 'JSON Visualizer', tech: 'Vanilla JS / D3' },
		{ name: 'Color Tool', tech: 'Svelte / CSS' }
	];
</script>

<div
	class="card relative col-span-1 flex min-h-[22rem] flex-col gap-4
	p-6 sm:min-h-[24rem] lg:row-span-5 lg:min-h-[20rem]"
>
	<h2 class="text-xl font-semibold sm:text-2xl">Private Projekte</h2>

	<ul class="flex flex-col gap-3 text-sm text-gray-700">
		{#each projects as project}
			<li>
				<p class="font-medium">{project.name}</p>
				<p class="text-xs text-gray-500 sm:text-sm">{project.tech}</p>
			</li>
		{/each}
	</ul>
</div>
