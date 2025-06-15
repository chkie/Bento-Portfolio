<script lang="ts">
        import { goto } from '$app/navigation';
        import Button from './ui/Button.svelte';
</script>

<div class="flex h-full flex-col justify-between text-sm">
	<div>
		<h2 class="mb-2 text-base font-semibold">Berufliche Projekte</h2>
		<p class="text-neutral-600">
			Einblicke in reale Kunden- oder Teamprojekte, die ich im Rahmen meiner Festanstellung
			entwickelt habe.
		</p>
	</div>
       <Button on:click={() => goto('/work-projects')}>Mehr erfahren →</Button>
</div>
