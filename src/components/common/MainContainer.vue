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
      <div class="p-6" style="height: calc(100vh - 100px); overflow-y: auto;">
        <Chat />
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="bg-black p-6" style="height: calc(100vh - 100px); overflow-y: auto;"
    >
      <!-- Header -->
      <div class="flex justify-between items-center text-white mb-8">
        <h1 class="text-lg ">Welcome Back, Zaqk187420</h1>
   
      </div>

      <div class="main-content mt-8" >
          <!-- Top Banner -->
          <div class="top-banner flex" style="height:230px;"> <!-- Container for both cards -->
              <!-- Coinflips Card -->
              <router-link to="/coinflip" class="card-link coinflips-card flex items-center justify-between text-white py-6 px-0 rounded-lg shadow-lg w-1/2" style="background-color: #171717; border: 3px solid #222121;">
                <img src="@/assets/coinflip-left.svg" alt="Left Image">
                <h2 class="text-4xl font-bold text-center flex-1 mx-4">Coinflips</h2>
                <img src="@/assets/coinflip-right.svg" alt="Right Image">
              </router-link>
            
              <!-- Jackpot Card -->
              <router-link to="/jackpot" class="card-link jackpot-card flex items-center justify-center bg-cover bg-center text-white p-6 rounded-lg shadow-lg w-1/2 ml-6" style="background-image: url('src/assets/Group 5.svg'); background-color: #171717; border: 3px solid #222121;">
                <h2 class="text-4xl font-bold text-center">Jackpot</h2>
              </router-link>
            </div>
            
           <div class="p-6 rounded-lg shadow-lg mt-6 text-white" style="background-color: #171717; border: 3px solid #222121;">
              <h1 class="text-2xl">Records:</h1>
          <!-- Records Section -->
          <div class="records mt-2 grid grid-cols-3 gap-6 text-center">
              <div class="card-link block record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121; display: flex; flex-direction: column; justify-content: space-between;">
                  <!-- Top Text Div -->
                  <div class="text-top">
                    <h2 class="text-lg font-bold">BIGGEST JACKPOT EVER</h2>
                    <p class="text-sm">won by Zaqk187420</p>
                  </div>
                
                  <!-- Center Image Div -->
                  <div class="flex justify-center">
                    <img src="@/assets/Group 1biggest_jacpot.svg" alt="Jackpot"  />
                  </div>
                
                  <!-- Bottom Text Div -->
                  <div class="text-bottom mt-auto">
                    <p class="text-xl font-bold">$2568.64</p>
                  </div>
                </div>
                
                <div class="card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121; display: flex; flex-direction: column; justify-content: space-between;">
                  <!-- Top Text Div -->
                  <div class="text-top">
                    <h2 class="text-lg font-bold">LUCKIEST JACKPOT EVER</h2>
                    <p class="text-sm">won by Zaqk187420</p>
                  </div>
                
                  <!-- Center Image Div -->
                  <div class="flex justify-center">
                    <img src="@/assets/Group 3.svg" alt="Lucky Clover"  />
                  </div>
                
                  <!-- Bottom Text Div -->
                  <div class="text-bottom mt-auto">
                    <p class="text-xl font-bold">$13.50</p>
                  </div>
                </div>
                
                <div class="card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121; display: flex; flex-direction: column; justify-content: space-between;">
                  <!-- Top Text Div -->
                  <div class="text-top">
                    <h2 class="text-lg font-bold">BIGGEST COINFLIP EVER</h2>
                    <p class="text-sm">won by Zaqk187420</p>
                  </div>
                
                  <!-- Center Image Div -->
                  <div class="flex justify-center">
                    <img src="@/assets/Group 4.svg" alt="Coinflip"  />
                  </div>
                
                  <!-- Bottom Text Div -->
                  <div class="text-bottom mt-auto">
                    <p class="text-xl font-bold">$5103.45</p>
                  </div>
                </div>
                
          </div>
      </div>
        </div>
    </div>
  </div>
</template>


<script>
import Chat from "./Chat.vue";
import LoginTopBar from "./LoginTopBar.vue";

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

  },
};
</script>

<style scoped>
.card {
background-color: #171717;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
height: 150px;
transition: opacity 0.3s ease-in-out;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
position: relative; /* For absolute positioning of images */
}

.card img {
width: 64px; /* Width of the images */
height: 64px; /* Height of the images */
position: absolute;
top: 8px;
right: 8px;
}


.card-link:hover  {
  opacity: 0.8;
  transform: scale(1.02);
}


</style>


