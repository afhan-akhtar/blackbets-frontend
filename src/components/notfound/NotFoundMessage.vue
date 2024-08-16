<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="text-center text-white">
      <h1 class="text-8xl">404</h1>
      <p class="text-4xl font-bold mt-4">This page could not be found</p>
      <div class="bg-primaryBlack h-1 my-4"></div>
      <div class="mt-8">
        <BackHomeButton />
      </div>
    </div>
  </div>
</template>

<script>
import BackHomeButton from './BackHomeButton.vue'

export default {
  name: 'NotFoundMessage',
  components: {
    BackHomeButton
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
