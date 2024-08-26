<template>
  <LoginTopBar />
  <div class="flex min-h-screen">
    <!-- Chat Section -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-800 text-white'
      ]"
    >
      <div class="p-6" >
        <Chat />
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="bg-black p-6" 
    >
    <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md">
      <img src="@/assets/arrow-left.svg" alt="">
    </button>
      <!-- Header -->
      <div class="flex justify-between items-center text-white mb-2">
        <h1 class="text-2xl">Provably Fair</h1>
      </div>

      <div class="main-content">
        <div
          class="p-6 rounded-lg shadow-lg text-white"
          style="background-color: #171717; border: 3px solid #222121; height: 700px;"
        >
          <!-- <button @click="makeTransaction" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Make Transaction
          </button> -->
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

  },
};
</script>

<style scoped>
/* Your existing styles */
</style>
