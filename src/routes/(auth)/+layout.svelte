<script lang="ts">
	import Footer from '$lib/componnets/home/footer.svelte';
	import Header from '$lib/componnets/home/header.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="">
	<Header />
	<slot />
	<Footer />
</div>
