<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="flex h-full flex-col justify-between text-sm">
	<p class="text-neutral-500">© {new Date().getFullYear()} Max Mustermann</p>
	<div class="mt-2 flex gap-4">
		<a href="/impressum" class="text-neutral-600 hover:underline">Impressum</a>
		<a href="/datenschutz" class="text-neutral-600 hover:underline">Datenschutz</a>
	</div>
</div>
