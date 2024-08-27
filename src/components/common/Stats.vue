<template>
    <div class="flex mt-8">
      <div v-for="(stat, index) in stats" :key="index" class="w-1/2 px-8 pb-0 pt-8">
        <div class="flex justify-around items-center bg-gray-700 px-0 text-white">
          <p class="text-lg font-bold">{{ stat.value }}</p>
          <p>{{ stat.percentage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      stats: Array
    }
  }
  </script>
  
  <style scoped>
  
  .create-game-btn {
    
    color: #ffffff;
    padding: 10px 20px;
  
    cursor: pointer;
  }
  
  
  .card .avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
  
  .card .price {
    font-size: 1.5em;
  }
  
  
  .card-buttons .join-btn, .card-buttons .view-btn {
    padding: 8px 16px;
  }
  
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0px; /* Adjust the gap between images */
    justify-content: center; /* Centers the images horizontally */
  }
  
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Optional: Add fixed dimensions if needed */
    width: 100px; /* Adjust as needed */
    height: 100px; /* Adjust as needed */
  }
  
  .token-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }
  .right-image{
   
    margin-left: -55px;
  
  }
  .hr{
    height: 2px;
    color: #9D9D9D;
  }
  .card-link:hover  {
    opacity: 0.8;
    cursor: pointer;
  }
  
  .card-link:hover {
    transform: scale(1.02);
  }
  
  
  
  </style>
  