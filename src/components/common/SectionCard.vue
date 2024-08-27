<template>
    <div class="flex justify-center items-center mt-5">
      <div class="rounded-lg" style="background-color: #171717; width:200px; border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;">
        <h6 class="text-center">{{ title }}</h6>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
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
  