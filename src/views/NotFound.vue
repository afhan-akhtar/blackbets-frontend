<template>
  <TopBar />
  <div class="flex flex-col items-center justify-center h-screen">
    <NotFoundMessage />
  </div>
</template>
<script>
import TopBar from '@/components/common/TopBar.vue';
import NotFoundMessage from '../components/notfound/NotFoundMessage.vue'
export default {
  name: 'NotFound',
  
  components: {
    NotFoundMessage,
    TopBar
  }
}
</script>

<style></style>
