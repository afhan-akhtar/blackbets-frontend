<template>
  <footer class="bg-secondaryBlack text-white py-8 h-[350px]">
    <div class="container mx-auto flex justify-between mx-20 h-full">
      <div class="text-left flex flex-col justify-between">
        <div>
          <img src="@/assets/blackbets-logo.svg" alt="BLACKBETS" class="w-64 mb-4" />
          <p class="mt-1 text-sm">The original Rust Jackpot and coinflip site.</p>
          <p class="mt-1 text-sm">blackbets@proton.me</p>
          <p class="mt-1 text-sm">.gg/blackbets</p>
        </div>
        <div class="mt-4 flex items-center">
          <img src="@/assets/18plus-icon.svg" alt="18+" class="w-12 h-12 mr-4" />
          <div>
            <p class="text-sm">
              By accessing this site, you confirm that you are over 18 years old.
            </p>
            <p class="text-sm">
              Have a Gambling Problem?
              <a href="#" class="text-gray-600 underline-link">Reach out for help</a>
            </p>
          </div>
        </div>
        <p class="mt-4 text-sm">© All rights reserved 2024</p>
      </div>
      <div class="flex space-x-32 text-left">
        <div>
          <h2 class="text-md font-bold">INFORMATION</h2>
          <ul>
            <li>
              <router-link to="/provably-fair" class="text-gray-600 text-sm">Provably Fair</router-link>
            </li>
            <li>
              <router-link to="/faq" class="text-gray-600 text-sm">FAQ</router-link>
            </li>
            <li>
              <router-link to="/terms" class="text-gray-600 text-sm">Terms of Service</router-link>
            </li>
            <li>
               <router-link to="/privacy-policy" class="text-gray-600 text-sm">Privacy Policy</router-link>
            </li>
            <li>
               <router-link to="/support" class="text-gray-600 text-sm">Support</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-md font-bold">GAMES</h2>
          <ul>
            <li>
              <a href="#" class="text-gray-600 text-sm">CoinFlip</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 text-sm">Jackpot</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-md font-bold">SOCIAL</h2>
          <ul>
            <li>
              <a href="#" class="text-gray-600 text-sm">Discord</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 text-sm">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.underline-link {
  text-decoration: underline;
}
</style>
