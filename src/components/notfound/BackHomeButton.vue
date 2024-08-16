<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <div
      class="nav-item flex items-center justify-center drop-shadow-custom bg-primaryBlack rounded-[2px] px-8 py-3 text-white font-bold shadow-md mx-2"
      @click="navigate"
    >
      <img src="@/assets/house-icon.svg" alt="Home" class="icon-home mr-2" />
      <span class="text-2xl font-medium">Home</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BackHomeButton'
}
</script>

<style scoped>
.nav-item {
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px auto;
  margin: 5px auto;
  cursor: pointer;
}

.icon-home {
  width: 66px;
  height: 63px;
}

.nav-item:hover {
  background-color: #555;
}
</style>
