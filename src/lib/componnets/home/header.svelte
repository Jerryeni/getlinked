<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  </script>
  
  <Navbar let:hidden let:toggle class="shadow-sm px-20 text-white bg-primary-500">
    <NavBrand href="/">
      <!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> -->
      <div class="font-bold text-xl">get<span class="text-tertiary-500">linked</span></div>
    </NavBrand>
    <div class="flex space-x-4 md:order-2">
        <button class="border border-primary-500 text-[14px] text-primary-500 px-4 sm:py-1 rounded-full hover:bg-primary-500 hover:text-white">Log in</button>
        <button class="bg-secondary-500  text-[14px] text-white btn rounded-[4px] px-8 py-4 sm:py-1 hover:bg-primary-700">Sign up</button>
      <!-- <Button size="xs">Get started</Button>
      <Button size="sm">Get started</Button> -->
      <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden} class="order-1 text-white">
      <NavLi href="/" active={true} class="text-[16px] text-white">Home</NavLi>    
      <NavLi href="/" class="text-[16px] text-white">Plans</NavLi>
      <NavLi href="/" class="text-[16px] text-white">FAQs</NavLi>
      <NavLi href="/contact" class="text-[16px] text-white">Contact</NavLi>
    </NavUl>
  </Navbar>
<div class="hr h-px bg-[#444444] w-full"></div>
  <style>
    .btn {
      border-radius: 4px;
      background: linear-gradient(270deg, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%);
    }
  </style>
  