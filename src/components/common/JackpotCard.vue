<template>
    <div class="main-content p-6 rounded-lg shadow-lg text-white" style="background-color: #171717; border: 3px solid #222121; height: 800px;">
      <div class="records grid grid-cols-3 gap-6 text-center">
        <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white shadow-lg" style="background-color: #222121;">
          <h2 class="text-lg font-bold">Instant Jackpot</h2>
          <img style="background-repeat: no-repeat;" src="@/assets/istockphoto-1360035898-612x612-removebg-preview 36biggest_jacpot.svg" alt="Jackpot" class="mx-auto mb-4" />
        </router-link>
        <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white shadow-lg" style="background-color: #222121;">
          <h2 class="text-lg font-bold">Hourly Jackpot</h2>
          <img style="background-repeat: no-repeat;" src="@/assets/Group 6.svg" alt="Jackpot" class="mx-auto mb-4" />
        </router-link>
        <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white shadow-lg" style="background-color: #222121;">
          <h2 class="text-lg font-bold">Daily jackpot</h2>
          <img src="@/assets/Group 7.svg" alt="Jackpot" class="mx-auto mb-4" />
        </router-link>
      </div>
  
      <div class="records mt-6 grid grid-cols-3 gap-6 text-center">
        <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white shadow-lg" style="background-color: #222121; background-image: url('src/assets/Group 8.svg'); height: 347px; background-repeat: no-repeat; background-size: cover; background-position: center;">
          <h2 class="text-lg font-bold">Weekly Jackpot</h2>
        </router-link>
        <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white shadow-lg" style="background-color: #222121; background-image: url('src/assets/Group 9.svg'); height: 347px; background-repeat: no-repeat; background-size: cover; background-position: center;">
          <h2 class="text-lg font-bold">Biweekly Jackpot</h2>
        </router-link>
        <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white shadow-lg" style="background-color: #222121; background-image: url('src/assets/Group 10.svg'); height: 347px; background-repeat: no-repeat; background-size: cover; background-position: center;">
          <h2 class="text-lg font-bold">Monthly jackpot</h2>
        </router-link>
      </div>
    </div>
  </template>

  <style scoped>
  
.card-link:hover  {
    opacity: 0.8;
    transform: scale(1.02);
  }
  
</style>
  
  
  