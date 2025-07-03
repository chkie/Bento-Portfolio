<script lang="ts">
	import { fade } from 'svelte/transition'; // sanfter Cross-Fade
	let showMore = false;
</script>

<!-- 2-Spalten-Karte, relative für Overlay-Technik -->
<div class="card relative col-span-1 min-h-[26rem] sm:min-h-[24rem] lg:row-span-6 lg:min-h-[26rem]">
	<!-- Ansicht A  (Bild + Kurztext) -->
	{#if !showMore}
		<div
			in:fade
			out:fade
			class="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
		>
			<img
				src="/images/avatar.jpg"
				alt="Chriz"
				class="h-36 w-36 rounded-full object-cover shadow-md md:h-48 md:w-48"
			/>

			<h2 class="text-2xl font-semibold">Über mich</h2>

			<p class="text-sm leading-relaxed text-gray-700">
				Hi, ich bin Chriz – leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne
				Web-Interfaces.
			</p>

			<button
				class="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
				on:click={() => (showMore = true)}
			>
				Mehr über mich
			</button>
		</div>
	{/if}

	<!-- Ansicht B  (Detailtext) -->
	{#if showMore}
		<div
			in:fade
			out:fade
			class="absolute inset-0 flex flex-col justify-center gap-4 p-6 text-sm leading-relaxed text-gray-700"
		>
			<h2 class="text-center text-2xl font-semibold">Über mich</h2>

			<p>
				Mein Weg in die IT begann als Quereinsteiger – heute baue ich strukturierte, performante
				Frontends mit hohem Qualitätsanspruch.
			</p>
			<p>
				SvelteKit & Tailwind CSS sind meine Werkzeuge der Wahl – sauberer Code, klare UI, 100 %
				Fokus auf Nutzbarkeit.
			</p>
			<p>Mein Ziel: Oberflächen bauen, die nicht nur funktionieren – sondern überzeugen.</p>

			<button
				class="self-center rounded bg-gray-200 px-4 py-2 text-gray-800 transition hover:bg-gray-300"
				on:click={() => (showMore = false)}
			>
				Zurück
			</button>
		</div>
	{/if}
</div>
