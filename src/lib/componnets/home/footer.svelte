<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="socialmedia" class="xl:px-20 px-4 bg-[#041978]x bg-primary-600 pt-8">
    <div class="md:flex md:justify-betweenx md:space-x-48">
      <div class="mb-6 md:mb-0">
        <FooterBrand href="/" src="/images/logo-white.svg" classImg="max-sm:h-9 h-14" alt="Novus Logo" name="" />
        <div class="my-8">
            <h1 class="text-white text-md md:text-xl xl:text-2xl">Have questions or feedback?</h1>
            <div class="text-gray-200 mt-2 space-y-1">
                <div class="">
                    <span class="text-white">Address:</span> 
                    <span class="text-gray-300"> 123 Street City, State, Nigeria</span>
                </div>
                <div class="">
                    <span class="text-white">Phone:</span> 
                    <span class="text-gray-300">+234 7034000000</span>
                </div>
                <div class="">
                    <span class="text-white">Email:</span> 
                    <span class="text-gray-300">info@yourwebsite.com</span>
                </div>
            </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div class="">
          <h2 class="mb-6 text-md font-semibold uppercase text-white">Navigation</h2>
          <FooterLinkGroup class="!text-gray-200">
            <FooterLink liClass="mb-4" href="/">Home</FooterLink>
            <FooterLink liClass="mb-4" href="/">Plans</FooterLink>
            <FooterLink liClass="mb-4" href="/">FAQs</FooterLink>
            <FooterLink liClass="mb-4" href="/">Support</FooterLink>
            <FooterLink liClass="mb-4" href="/">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold uppercase text-white">Follow us</h2>
          <FooterLinkGroup class="!text-gray-200">
            <FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
            <FooterLink liClass="mb-4" href="/">Instagram</FooterLink>
            <FooterLink liClass="mb-4" href="/">Youtube</FooterLink>
            <FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold uppercase text-white">Legal</h2>
          <FooterLinkGroup class="!text-gray-200">
            <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-center">
      <FooterCopyright href="/" by="Novus" classSpan="text-gray-300"/>
      <div class="flex mt-4 space-x-6 justify-center sm:mt-0">
        <!-- <FooterIcon href="/">
          <FacebookSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <Dribble />
        </FooterIcon> -->
      </div>
    </div>
  </Footer>