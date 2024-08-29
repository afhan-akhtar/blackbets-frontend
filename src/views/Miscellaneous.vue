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
  <div class="py-6 px-5 h-full" >
        <Chat />
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="bg-gray-100 p-6 h-full"
    >
    <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md mb-2">
      <img src="@/assets/arrow-left.svg" alt="">
    </button>
      <!-- Main Container -->
      <div class="bg-gray-800 px-8 py-0 rounded-lg w-full text-white">
        <div class="grid grid-cols-2 gap-6 text-center">
          <div class="card-link">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Number of Coinflips</h2>
              <p class="text-lg font-bold">20532</p>
            </div>
          </div>
          <div class="card-link">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Number of Jackpots</h2>
              <p class="text-lg font-bold">512</p>
            </div>
          </div>
          <div class="card-link">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Total wagered</h2>
              <p class="text-lg font-bold">$52.012</p>
            </div>
          </div>
          <div class="card-link">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Total affiliates payed out</h2>
              <p class="text-lg font-bold">$5.202</p>
            </div>
          </div>
          <div class="card-link">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Total taxed</h2>
              <p class="text-lg font-bold">$522.012</p>
            </div>
          </div>
          <div class="card-link">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Total profit</h2>
              <p class="text-lg font-bold">$899.012</p>
            </div>
          </div>
        </div>
        
        <!-- Player Count Section Outside the Grid -->
        <div class="flex justify-center mt-6">
          <div class="card-link w-full max-w-lg">
            <div
              class="card bg-black p-6 rounded-lg shadow-lg text-center"
              style="background-color: #171717; border: 3px solid #222121;"
            >
              <h2 class="text-xl font-semibold">Player Count</h2>
              <p class="text-lg font-bold">5312</p>
            </div>
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
.card {
  background-color: #222221;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  height: 150px;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Centers the text horizontally */
}


.card-link:hover .card {
  opacity: 0.8;
}

.card-link {
  display: block;
  transition: all 0.3s ease;
}

.card-link:hover {
  transform: scale(1.02);
}
</style>
