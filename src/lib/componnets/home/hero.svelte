<script>
	// @ts-nocheck

	import { Button } from 'flowbite-svelte';
	import FontAwesomeIcon from '../font-awesome-icon.svelte';
	import Header from './header.svelte';
	// import Typewriter from 'svelte-typewriter';
	import { concurrent, loop } from 'svelte-typewriter';
</script>

<section class="w-full relative flex flex-col px-20 0 relative bg-primary-500 mt-0">
	<!-- <Header /> -->
	<p
		class="text-xl my-4 absolute italic font-bold right-1 flex justify-end px-8"
		use:concurrent={{ interval: 60, delay: 30 }}
	>
		Igniting a Revolution in HR Innovation
	</p>
	<div
		class="flex w-full justify-between mt-28 relative bg-[url(/images/Purple-Lens-Flare-PNG.png')] object-contain"
	>
		<div class="text-left pt-20 w-full">
			<!-- <div class="absolute left- -top-[100px]">
				<img src="/images/Purple-Lens-Flare-PNG.png" class="h-[600px]" alt="">
			</div> -->
			<h1 class="font-bold text-7xl">getlinked Tech</h1>
			<div class="flex">
				<h1 class="font-bold text-7xl flex">
					Hackathon <span class="text-secondary-500">1.0</span>

					<span class="flex">
						<img src="/images/chain.svg" alt="" />
						<img src="/images/bright.svg" alt="" />
					</span>
				</h1>
			</div>
			<p class="font-semibold text-xl">
				Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
			</p>

			<button class="bg-secondary-500 font-bold mt-4 py-10 text-[14px] text-white btn rounded-[4px] px-8 sm:py-1 hover:bg-primary-700">Register</button>

		</div>
		<div class="w-full object-fit">
			<img src="/images/hero1.png" class="object-cover" alt="man wearing glass" />

			<div class="">
				<img
					src="/images/image.png"
					class="object-fit absolute top-0 right-8 motion-safe:animate-spin-slow"
					width="40%"
					alt="man wearing glass"
				/>
			</div>
		</div>
	</div>
</section>
<div class="hr h-px bg-[#444444] w-full"></div>
<style>
	.btn {
		border-radius: 4px;
		background: linear-gradient(270deg, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%);
		padding: 12px 48px;
	}

	.hr{
		/* background: rgba(255, 255, 255, 0.18); */
	}
</style>
