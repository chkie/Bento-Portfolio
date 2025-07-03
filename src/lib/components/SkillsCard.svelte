<script lang="ts">
	const skills = [
		{ name: 'Svelte', icon: '/icons/svelte.svg' },
		{ name: 'Tailwind', icon: '/icons/tailwind.svg' },
		{ name: 'TypeScript', icon: '/icons/typescript.svg' },
		{ name: 'GitHub', icon: '/icons/github.svg' },
		{ name: 'Vite', icon: '/icons/vite.svg' }
	];
</script>

<div
	class="card relative col-span-1 flex min-h-[18rem] flex-col items-center
	justify-center gap-6 p-6 text-center sm:min-h-[20rem] lg:row-span-2 lg:min-h-[16rem]"
>
	<h2 class="text-xl font-semibold sm:text-2xl">Skills</h2>

	<div class="grid grid-cols-3 gap-4 sm:grid-cols-5">
		{#each skills as skill}
			<div class="flex flex-col items-center gap-2">
				<img src={skill.icon} alt={skill.name} class="h-10 w-10 object-contain" />
				<span class="text-xs text-gray-600 sm:text-sm">{skill.name}</span>
			</div>
		{/each}
	</div>
</div>
