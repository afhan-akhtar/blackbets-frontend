<template>
    <LoginTopBar />
    <div class="flex min-h-screen flex-col xl:flex-row">
      <!-- Chat Section -->
      <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-800 text-white'
      ]"
    >
        <div class="p-6 h-full ">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="bg-gray-100 p-6 h-full "
      >
      <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md mb-2">
        <img src="@/assets/arrow-left.svg" alt="">
      </button>
        <!-- Main Container -->
        <div class="bg-gray-800 p-8 rounded-lg shadow-md w-full text-white" style="background-color: #171717; border: 3px solid #222121; height: 832px; ">
          <div class="w-1/3">
            <div >
              <div class="flex justify-between items-center margin-bottom">
                <label for="maintenance" class="text-lg font-medium">Maintenance</label>
                <input id="maintenance" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin-bottom">
                <label for="disable-chat" class="text-lg font-medium">Disable Chat</label>
                <input id="disable-chat" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin-bottom">
                <label for="lock-coinflip" class="text-lg font-medium">Lock Coinflip</label>
                <input id="lock-coinflip" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin">
                <label for="lock-jackpots" class="text-lg font-medium">Lock Jackpots</label>
                <input id="lock-jackpots" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin">
                <label for="lock-instant" class="text-lg font-medium">Lock Instant</label>
                <input id="lock-instant" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin">
                <label for="lock-daily" class="text-lg font-medium">Lock Daily</label>
                <input id="lock-daily" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin">
                <label for="lock-weekly" class="text-lg font-medium">Lock Weekly</label>
                <input id="lock-weekly" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin">
                <label for="lock-biweekly" class="text-lg font-medium">Lock Bi-Weekly</label>
                <input id="lock-biweekly" type="checkbox" class="custom-checkbox h-6 w-6" />
              </div>
              <div class="flex justify-between items-center margin">
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
      async makeTransaction() {
      try {
        // Prepare transaction data
        const transactionData = {
          amount: 100,  // Example transaction amount
          userId: this.$store.state.user.id,
        };

        // Send transaction request to backend using axios
        const response = await axios.post('https://your-backend-api/transaction', transactionData);

        console.log('Transaction successful', response.data);

        // Handle success (e.g., update UI, show confirmation message)
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        // Handle error (e.g., show error message to user)
      }
    },
    goBack() {
      this.$router.go(-1);
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


.margin-bottom{
  margin-bottom: 60px;
}
.margin{
  margin-bottom: 10px;
}
</style>
