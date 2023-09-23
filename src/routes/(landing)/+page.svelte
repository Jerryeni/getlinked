<script lang="ts">
	import App from '$lib/componnets/home/app.svelte';
	import Contact from '$lib/componnets/home/contact.svelte';
	import Features from '$lib/componnets/home/intro.svelte';
	import Hero from '$lib/componnets/home/hero.svelte';
	import Testimonials from '$lib/componnets/home/rules.svelte';
	import type { PageData } from './$types';
	import Intro from '$lib/componnets/home/intro.svelte';
	import Rules from '$lib/componnets/home/rules.svelte';
	import Judging from '$lib/componnets/home/judging.svelte';

	export let data: PageData;
</script>

<div class="">
	<Hero />
	<Intro />
	<Rules />
	<Judging />
	<!-- <App /> -->
	<Contact color="bg-primary-500 text-white" />
	
</div>
