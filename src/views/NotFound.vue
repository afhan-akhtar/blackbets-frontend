<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <NotFoundMessage />
  </div>
</template>
<script>
import NotFoundMessage from '../components/notfound/NotFoundMessage.vue'
export default {
  name: 'NotFound',
  components: {
    NotFoundMessage
  }
}
</script>

<style></style>
