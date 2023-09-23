<script>
	import { Button } from "flowbite-svelte";
    export let color = '';
</script>
<div class="py-16 px-6 sm:px-12 md:px-16 xl:py-32 xl:px-40 2xl:px-80 space-y-4 {color} flex flex-col items-center">
    <h1 class="text-2xl sm:text-3xl 2xl:text-5xl font-bold font-serif  sm:w-1/2x text-center tra uppercasex">Need help?</h1>
    <h1 class="text-center text-lg sm:text-xl">We are here to support you every step of the way</h1>
    <Button class="bg-secondary-500 xl:text-xl shadow-lg hover:bg-[#1878CA]">Contact us</Button>
</div>