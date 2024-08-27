<template>
    <div class="relative inline-block flex justify-center items-center">
      <div class="w-72 h-72 rounded-full bg-[#1B1B1B] flex justify-center items-center flex-col z-10">
        <!-- Outer circle -->
        <div class="absolute" style="top:-5px;">
          <img src="@/assets/Polygon 50.svg" alt="">
        </div>
        <div class="absolute" style="top:20px;">
          <img src="@/assets/Polygon 51.svg" alt="">
        </div>
      
        <div class="w-60 h-60 rounded-full shadow-xl flex justify-center items-center" style="background-color: #222121;">
          <img src="@/assets/Group 11.svg" alt="Timer Background" class="w-full h-full rounded-full" />
        </div>
        <!-- Text Overlay -->
        <div class="flex flex-col justify-center items-center text-center text-white absolute">
          <p class="text-4xl font-bold mb-2">{{ timer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      timer: {
        type: String,
        default: '2m 0s'
      }
    }
  }
  </script>
  
  <style scoped>
  .circle-timer {
    background-color: #202020;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    position: relative;
    overflow: hidden;
  }
  .circle-timer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .circle-timer p {
    margin: 0;
  }
  </style>
  