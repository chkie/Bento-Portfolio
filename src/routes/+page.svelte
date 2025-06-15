<script lang="ts">
	import SectionWrapper from '$lib/components/ui/SectionWrapper.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import GitHubStats from '$lib/components/GitHubStats.svelte';
	import WorkProjectsCard from '$lib/components/WorkProjectsCard.svelte';
	import PersonalProjectsCard from '$lib/components/PersonalProjectsCard.svelte';
	import FooterCard from '$lib/components/FooterCard.svelte';
	import SocialLinksCard from '$lib/components/SocialLinksCard.svelte';
</script>

<div
        class="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-rows-dashboard lg:overflow-hidden xl:min-h-screen xl:grid-cols-12"
>
	<!-- Vorstellung -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-full">
		<AboutMe />
	</SectionWrapper>

	<!-- Timeline -->
	<SectionWrapper className="xl:col-span-9 xl:row-span-2">
		<Timeline />
	</SectionWrapper>

	<!-- Skills -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-2">
		<Skills />
	</SectionWrapper>

	<!-- Berufliche Projekte -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-2">
		<WorkProjectsCard />
	</SectionWrapper>

	<!-- Private Projekte (JETZT eingebaut) -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-2">
		<PersonalProjectsCard />
	</SectionWrapper>

	<!-- Kontakt -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-2">
		<Contact />
	</SectionWrapper>

	<!-- GitHub-Stats -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-2">
		<GitHubStats />
	</SectionWrapper>

	<!-- Footer-Kachel oder Weiteres -->
	<SectionWrapper className="xl:col-span-9 xl:row-span-1">
		<p class="text-sm text-neutral-500">Weitere Inhalte oder Footer-Kachel</p>
	</SectionWrapper>
	<!-- Footer-Kachel -->
	<SectionWrapper className="xl:col-span-9 xl:row-span-1 hidden xl:block">
		<FooterCard />
	</SectionWrapper>
	<!-- Social Links unten rechts -->
	<SectionWrapper className="xl:col-span-3 xl:row-span-1 hidden xl:block">
		<SocialLinksCard />
	</SectionWrapper>
</div>
