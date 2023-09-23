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
		<div class="flex flex-col py-20 w-full px-6 md:px-0 s md:w-[50%] mx-auto">
			<div class="flex flex-col px-1 md:px-0 items-center gap-y-3">
				<h1 class="font-bold text-3xl md:text-4xl">Sign up</h1>
				<p class="text-md text-center">Signup to Novus network to enjoy amazing wifi deals!</p>
			</div>
			<div class="flex flex-col justify-center my-10 gap-4">
				<div class="flex flex-col md:flex-row gap-4">
					<Input id="firstName" placeholder="John" label="First name" />
					<Input id="lastName" placeholder="Doe" label="Last name" />
				</div>
				<div class="flex flex-col md:flex-row gap-4">
					<Input id="email" placeholder="user@example.com" label="Email" />
					<!-- <Input id = 'password'/> -->
					<PasswordInput label="Password" placeholder="******" />
				</div>
				<div class="w-full flex justify-end">
                    <Button class="bg-primary-500 w-full md:w-1/2 xl:text-xl shadow-lg hover:bg-primary-600">Sign up</Button>
				</div>
			</div>
            <p class="text-center md:py-10">Have an account? <a href="/login" class="text-semibold text-secondary-500">Login here</a></p>
		</div>
	</div>

    <Contact color="bg-white text-black"/>
</section>
