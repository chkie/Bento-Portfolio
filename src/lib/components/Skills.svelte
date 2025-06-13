<script lang="ts">
	const skills: string[] = [
		'Svelte',
		'Tailwind CSS',
		'TypeScript',
		'Git',
		'Figma',
		'Responsive Design'
	];
</script>

<div class="flex flex-wrap gap-2 text-sm">
	{#each skills as skill}
		<span class="rounded-full bg-neutral-200 px-3 py-1 text-neutral-800">{skill}</span>
	{/each}
</div>
