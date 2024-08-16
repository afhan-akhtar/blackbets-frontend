<template>
  <div class="nav-wrapper">
    <nav
      class="flex justify-center drop-shadow-custom primaryStroke bg-secondaryBlack p-2 rounded-[20px]"
    >
      <!-- Home Link -->
      <router-link to="/" custom v-slot="{ navigate }">
        <div
          class="nav-item flex items-center drop-shadow-custom bg-primaryBlack rounded-[15px] px-2 py-1 text-white font-bold shadow-md mx-2"
          @click="navigate"
        >
          <img src="@/assets/house-icon.svg" alt="Home" class="icon-home mr-1" />
          <span>Home</span>
        </div>
      </router-link>

      <!-- Coinflips Link -->
      <router-link to="/coinflip" custom v-slot="{ navigate }">
        <div
          class="nav-item flex items-center drop-shadow-custom bg-primaryBlack rounded-[15px] px-3 py-1 text-white font-bold shadow-md mx-2"
          @click="navigate"
        >
          <span>Coinflips</span>
        </div>
      </router-link>

      <!-- Jackpot Link -->
      <router-link to="/jackpot" custom v-slot="{ navigate }">
        <div
          class="nav-item flex items-center drop-shadow-custom bg-primaryBlack rounded-[15px] px-2 py-1 text-white font-bold shadow-md mx-2"
          @click="navigate"
        >
          <span>Jackpot</span>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style scoped>
.nav-wrapper {
  height: 63px;
  max-width: 365px;
  min-width: 350px;
  margin: 0 auto;
}

.icon-home {
  width: 22px;
  height: 21px;
  margin-right: 8px; /* Space between the icon and text */
}

.nav-item {
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  padding: 7px auto;
  margin: 5px auto;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #555;
}
</style>
