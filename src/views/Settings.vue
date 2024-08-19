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
        <div class="bg-gray-800 p-8 rounded-lg shadow-md w-full text-white" style="background-color: #171717;">
          <div class="w-1/3">
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label for="maintenance" class="text-lg font-medium">Maintenance</label>
                <input id="maintenance" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="disable-chat" class="text-lg font-medium">Disable Chat</label>
                <input id="disable-chat" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-coinflip" class="text-lg font-medium">Lock Coinflip</label>
                <input id="lock-coinflip" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-jackpots" class="text-lg font-medium">Lock Jackpots</label>
                <input id="lock-jackpots" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-instant" class="text-lg font-medium">Lock Instant</label>
                <input id="lock-instant" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-daily" class="text-lg font-medium">Lock Daily</label>
                <input id="lock-daily" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-weekly" class="text-lg font-medium">Lock Weekly</label>
                <input id="lock-weekly" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-biweekly" class="text-lg font-medium">Lock Bi-Weekly</label>
                <input id="lock-biweekly" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center">
                <label for="lock-monthly" class="text-lg font-medium">Lock Monthly</label>
                <input id="lock-monthly" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="mt-6 bg-blue-600 text-white px-8 py-2 rounded-lg border-2 text-lg font-semibold"
              style="border-color:#ffffff;"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from '../components/common/Chat.vue'
  import LoginTopBar from '../components/common/LoginTopBar.vue'
  
  export default {
    components: {
      Chat,
      LoginTopBar
    },
    data() {
      return {
        isChatVisible: true,
      }
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible
      },
    }
  }
  </script>
  
  <style scoped>
  .custom-checkbox {
    appearance: none;
    background-color: #171717;
    border: 2px solid white;
    border-radius: 0.25rem; /* Rounded corners */
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
  
  .custom-checkbox:checked {
    background-color: #171717;
    border-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12' /%3E%3C/svg%3E");
    background-size: 1rem;
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>
  