<template>
    <LoginTopBar />
    <div class="flex h-screen">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-800 text-white overflow-hidden'
        ]"
      >
        <div class="p-6">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="bg-gray-100 p-6"
      >
        <!-- Main Container -->
        <div class="bg-gray-800 px-8 py-0 rounded-lg w-full text-white">
          <div class="grid grid-cols-2 gap-6 text-center">
            <div
              class="bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Number of Coinflips</h2>
              <p class="text-lg font-bold">20532</p>
            </div>
            <div
              class="bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Number of Jackpots</h2>
              <p class="text-lg font-bold">512</p>
            </div>
            <div
              class="bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Total wagered</h2>
              <p class="text-lg font-bold">$52.012</p>
            </div>
            <div
              class="bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Total affiliates payed out</h2>
              <p class="text-lg font-bold">$5.202</p>
            </div>
            <div
              class="bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Total taxed</h2>
              <p class="text-lg font-bold">$522.012</p>
            </div>
            <div
              class="bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Total profit</h2>
              <p class="text-lg font-bold">$899.012</p>
            </div>
          </div>
          
          <!-- Player Count Section Outside the Grid -->
          <div class="flex justify-center mt-6">
            <div
              class="bg-black p-6 rounded-lg shadow-lg w-full max-w-lg text-center"
              style="background-color: #171717;"
            >
              <h2 class="text-xl font-semibold">Player Count</h2>
              <p class="text-lg font-bold">5312</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  
  export default {
    components: {
      Chat,
      LoginTopBar,
    },
    data() {
      return {
        isChatVisible: true,
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styling if necessary */
  </style>
  