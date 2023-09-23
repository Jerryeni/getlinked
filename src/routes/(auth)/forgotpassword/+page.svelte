<script lang="ts">
	import Input from '$lib/componnets/auth/Input.svelte';
	// import Button from '$lib/componnets/auth/button.svelte';
	import PasswordInput from '$lib/componnets/auth/passwordInput.svelte';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import Contact from '$lib/componnets/home/contact.svelte';

	export let data: PageData;
</script>

<section>
	<div class="w-full bg-[#F8F9FF]">
		<div class="flex flex-col py-20 w-full px-6 md:px-0 s md:w-[35%] mx-auto">
			<div class="flex flex-col px-1 md:px-0 items-left gap-y-3">
				<h1 class="font-bold text-3xl md:text-4xl">Request password reset</h1>
				<p class="text-sm">Input the email associated with your account to receive reset link</p>
			</div>
			<div class="flex flex-col justify-center my-10 gap-4">
				<div class="flex flex-col gap-4">
					<Input id="email" placeholder="user@example.com" label="Email" />
				</div>
				<div class="w-full flex justify-end">
                    <Button class="bg-primary-500 w-full  xl:text-xl shadow-lg hover:bg-primary-600">Request reset link</Button>
				</div>
			</div>
		</div>
	</div>

    <Contact color="bg-white text-black"/>
</section>
