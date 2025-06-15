<script lang="ts">
        import { goto } from '$app/navigation';
        import Button from './ui/Button.svelte';
</script>

<div class="flex h-full flex-col justify-between text-sm">
	<div>
		<h2 class="mb-2 text-base font-semibold">Eigene Tools & Ideen</h2>
		<p class="text-neutral-600">
			Kleine Helfer, Webtools, Scripte oder Mini-Webseiten, die ich in meiner Freizeit entworfen
			habe.
		</p>
	</div>
       <Button on:click={() => goto('/personal-projects')}>Tools entdecken →</Button>
</div>
