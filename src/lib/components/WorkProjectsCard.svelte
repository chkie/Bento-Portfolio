<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="flex h-full flex-col justify-between text-sm">
	<div>
		<h2 class="mb-2 text-base font-semibold">Berufliche Projekte</h2>
		<p class="text-neutral-600">
			Einblicke in reale Kunden- oder Teamprojekte, die ich im Rahmen meiner Festanstellung
			entwickelt habe.
		</p>
	</div>
	<button
		class="mt-6 rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-300"
		on:click={() => goto('/work-projects')}
	>
		Mehr erfahren →
	</button>
</div>
