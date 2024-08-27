<template>
    <div class="flex justify-center space-x-4 py-4 card rounded-lg shadow-lg" style="background-color: #171717; margin: 20px; margin-top: 0px;">
      <div class="p-2 rounded-md w-full text-center">
        <div class="rounded-t-md overflow-hidden">
          <img src="@/assets/Rectangle 1218.svg" alt="Item Image" class="w-full h-16" />
        </div>
        <div>
          <p class="text-xs text-white mt-1">Won <span style="color:#4CC124;">${{ transaction.amount }}</span> with a {{ transaction.chance }}% Chance</p>
        </div>
        <div>
          <p class="text-xs text-white mt-1">Ticket:{{ transaction.ticket }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      transaction: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .main-content {
    max-width: 800px;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow-x: hidden; /* Disable horizontal scrolling */
  }
  
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
  
  .bg-yellow-500 {
    background-color: #FFC107;
  }
  
  html, body {
    overflow-x: hidden; /* Disable horizontal scrolling on the entire page */
  }
  .colored-hr {
    border: 0; /* Remove default border */
    height: 2px; /* Adjust the height of the line */
    background-color: #131313; /* Set your desired color */
  }
  .color-hr {
    border: 0; /* Remove default border */
    height: 2px; /* Adjust the height of the line */
    background-color: #9D9D9D; /* Set your desired color */
  }
  </style>
  
  