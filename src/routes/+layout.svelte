<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<!-- Wrapper notwendig, sonst sieht man keinen body -->
<div class="min-h-screen">
	{@render children()}
</div>
