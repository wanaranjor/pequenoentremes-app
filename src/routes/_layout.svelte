<script>
	import Header from "../components/shared/ui/Header.svelte";

	const TITLE_APP = process.env.TITLE_APP;
</script>

<svelte:head>
	<title>{TITLE_APP}</title>
</svelte:head>

<Header />
<main class="font-plexsans-regular">
	<slot />
</main>
