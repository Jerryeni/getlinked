<script>
	import { Button } from 'flowbite-svelte';
</script>

<section class="w-full relative flex flex-col px-20 0 relative bg-primary-500 mt-0">
	<div
		class="flex w-full justify-between items-center py-10 relative bg-[url(/images/Purple-Lens-Flare-PNG.png')] object-contain"
	>
		<div class="w-full object-fit">
			<img src="/images/judge.svg" class="object-cover" alt="man wearing glass" />

			
		</div>
		<div class="text-left pt-20 w-full">
			<h1 class="font-bold text-2xl">
				Judging Criteria
				<br /> <span class="text-secondary-500">Key attributes</span>
			</h1>

			<p class="font-medium text-sm leading-6 py-4">
				<span class="text-secondary-500">Innovation and Creativity</span>: Evaluate the uniqueness
				and creativity of the solution. Consider whether it addresses a real-world problem in a
				novel way or introduces innovative features
			</p>

            <p class="font-medium text-sm leading-6 py-4">
				<span class="text-secondary-500">Functionality</span>:  Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
			</p>


            <p class="font-medium text-sm leading-6 py-4">
				<span class="text-secondary-500">Impact and Relevance</span>:  Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
			</p>

            <p class="font-medium text-sm leading-6 py-4">
				<span class="text-secondary-500">Technical Complexity</span>:  Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
			</p>

            <p class="font-medium text-sm leading-6 py-4">
				<span class="text-secondary-500">Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
			</p>

            <button class="bg-secondary-500 font-bold mt-4 py-10 text-[14px] text-white btn rounded-[4px] px-8 sm:py-1 hover:bg-primary-700">Read more</button>
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
