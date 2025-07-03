<script lang="ts">
	import AboutCard from '$lib/components/AboutCard.svelte';
	import ContactCard from '$lib/components/ContactCard.svelte';
	import FooterCard from '$lib/components/FooterCard.svelte';
	import PrivatProjectsCard from '$lib/components/PrivatProjectsCard.svelte';
	import ProfessionalProjectsCard from '$lib/components/ProfessionalProjectsCard.svelte';
	import SkillsCard from '$lib/components/SkillsCard.svelte';
	import SocialLinksCard from '$lib/components/SocialLinksCard.svelte';
	import TimlineCard from '$lib/components/TimlineCard.svelte';
</script>

<div
	class="grid h-full w-full
	       auto-rows-auto grid-cols-1 gap-4 p-4 sm:grid-cols-2
	       sm:p-6 md:p-12 lg:grid-cols-4
	       lg:grid-rows-[repeat(9,1fr)] lg:p-20"
>
	<AboutCard />
	<TimlineCard />
	<ProfessionalProjectsCard />
	<PrivatProjectsCard />
	<ContactCard />
	<SkillsCard />
	<FooterCard />
	<SocialLinksCard />
</div>
