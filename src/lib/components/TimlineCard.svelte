<script lang="ts">
	const timeline = [
		{ year: '2023', title: 'Frontend-Entwickler', company: 'TechCorp AG' },
		{ year: '2022', title: 'Junior Dev', company: 'WebDesign GmbH' },
		{ year: '2021', title: 'Quereinstieg & Weiterbildung', company: '—' }
	];
</script>

<div
	class="card relative col-span-1 flex min-h-[22rem] flex-col
	gap-4 p-6 sm:col-span-2
	sm:min-h-[24rem] lg:col-span-3 lg:row-span-3 lg:min-h-[20rem]"
>
	<h2 class="text-xl font-semibold sm:text-2xl">Timeline</h2>

	<ul class="flex flex-col gap-4 text-sm text-gray-700">
		{#each timeline as step}
			<li class="relative border-l-2 border-blue-600 pl-4">
				<div class="absolute top-0 -left-[0.45rem] h-2 w-2 rounded-full bg-blue-600"></div>
				<p class="font-medium">{step.year}</p>
				<p>{step.title}</p>
				<p class="text-xs text-gray-500 sm:text-sm">{step.company}</p>
			</li>
		{/each}
	</ul>
</div>
