<script lang="ts">
	const links = [
		{
			name: 'GitHub',
			url: 'https://github.com/chkie',
			icon: '🐙'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/dein-profil',
			icon: '🔗'
		}
	];
</script>

<div class="flex h-full flex-col justify-between text-sm">
	<p class="text-neutral-500">Folge mir auf</p>
	<ul class="mt-2 space-y-2">
		{#each links as link}
			<li>
				<a
					href={link.url}
					class="flex items-center gap-2 text-neutral-700 hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>{link.icon}</span>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</div>
