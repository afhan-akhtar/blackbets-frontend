<template>
    <div class="flex justify-center items-center">
        <img data-v-eb3d0a37="" src="@/assets/blackbets-logo.svg" alt="BlackBets Logo" class="h-[55px] w-auto cursor-pointer">
    </div>
    <div class="flex items-center justify-center min-h-screen bg-black">
      <div class="text-center text-white">
       
        <p class="text-4xl font-bold mt-4">We are currently undergoing</p>
        <div class="text-4xl font-bold mt-4 d-flex justify-center items-center"><p>maintenance.</p></div>
        <div class="bg-primaryBlack h-1 my-4"></div>
        <p class="text-lg mt-4">Visit the discord for more information</p>
        <div class="mt-8">
            <router-link to="/">
                <div
                  class="nav-item flex items-center justify-center drop-shadow-custom bg-primaryBlack rounded-[2px] px-8 py-3 text-white font-bold shadow-md mx-2"
                  
                >
                  <img src="@/assets/images-removebg-preview 38.svg" alt="Home" class="icon-home mr-4" />
                  <span class="text-2xl font-medium">Discord</span>
                </div>
              </router-link>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .nav-item {
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px auto;
    margin: 5px auto;
    cursor: pointer;
    width: 50%;
  }
  
  .icon-home {
    width: 53px;
    height: 57px;
  }
  
  .nav-item:hover {
    background-color: #555;
  }
  </style>
  