<template>
    <div :class="['card rounded-lg shadow-lg', cardClass]" style="background-color: #222121; margin: 20px;">
      <!-- Centered Image Above Items -->
      <div class="flex flex-col items-center">
        <img src="@/assets/Rectangle 93chat.svg" alt="New Image" class="object-cover h-20 mb-2" />
        <div class="flex flex-row items-center text-white space-x-4">
          <p class="text-lg">$2.32</p>
          <p class="text-lg">12.64%</p>
        </div>
      </div>
  
      <!-- Items Rows -->
      <div v-for="rowIndex in numberOfRows" :key="'row-' + rowIndex" class="flex justify-center space-x-4 py-4">
        <div v-for="item in itemsPerRow" :key="'item-' + item" class="bg-[#171717] p-2 rounded-md w-24 text-center">
          <div class="rounded-t-xl overflow-hidden">
            <img src="@/assets/inventory.svg" alt="Item Image" class="object-cover w-full h-16" />
          </div>
          <p class="text-sm text-white mt-1">Item {{ item }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      numberOfRows: {
        type: Number,
        default: 1
      },
      itemsPerRow: {
        type: Number,
        default: 5
      },
      cardClass: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  