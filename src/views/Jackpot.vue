<template>
  <LoginTopBar />
  <div class="flex min-h-screen">
    <!-- Chat Section -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-800 text-white '
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
        <h1 class="text-2xl ">Our Jackpots</h1>
   
      </div>

      <div class="main-content">
        
           <div class="p-6 rounded-lg shadow-lg  text-white" style="background-color: #171717; border: 3px solid #222121; height: 800px;">
              
         
          <div class="records  grid grid-cols-3 gap-6 text-center">
            <router-link to="/jackpot/deposit" class="card-link record-card bg-black p-6 rounded-lg text-white  shadow-lg" style="background-color: #222121;">
           
              <h2 class="text-lg font-bold">Instant Jackpot</h2>
             
              <img style="background-repeat: no-repeat;" src="@/assets/istockphoto-1360035898-612x612-removebg-preview 36biggest_jacpot.svg" alt="Jackpot" class=" mx-auto mb-4" />
            
            </router-link>
            <router-link to="/jackpot/deposit" class=" card-link record-card bg-black p-6 rounded-lg text-white  shadow-lg" style="background-color: #222121;">
              
              <h2 class="text-lg font-bold">Hourly Jackpot</h2>
              <img style="background-repeat: no-repeat;" src="@/assets/Group 6.svg" alt="Jackpot" class=" mx-auto mb-4" />

              
            </router-link>
            <router-link to="/jackpot/deposit" class=" card-link record-card bg-black p-6 rounded-lg text-white  shadow-lg" style="background-color: #222121;">
            
              <h2 class="text-lg font-bold">Daily jackpot</h2>
            
              <img src="@/assets/Group 7.svg" alt="Jackpot" class=" mx-auto mb-4" />
             
            </router-link>
          </div>

          <div class="records mt-6  grid grid-cols-3 gap-6 text-center">
            <router-link to="/jackpot/deposit" class=" card-link record-card bg-black p-6 rounded-lg text-white  shadow-lg" style="background-color: #222121; background-image: url('src/assets/Group 8.svg'); height: 347px; background-repeat: no-repeat;     background-size: cover;
    background-position: center;  ">
           
              <h2 class="text-lg font-bold">Weekly Jackpot</h2>
             
              
            
            </router-link>
            <router-link to="/jackpot/deposit" class=" card-link record-card bg-black p-6 rounded-lg text-white  shadow-lg" style="background-color: #222121; background-image: url('src/assets/Group 9.svg'); height: 347px; background-repeat: no-repeat;     background-size: cover;
    background-position: center; ">
              
              <h2 class="text-lg font-bold">Biweekly Jackpot</h2>
             
           

              
            </router-link>
            <router-link to="/jackpot/deposit" class=" card-link record-card bg-black p-6 rounded-lg text-white  shadow-lg" style="background-color: #222121; background-image: url('src/assets/Group 10.svg'); height: 347px;  background-repeat: no-repeat;     background-size: cover;
    background-position: center; ">
            
              <h2 class="text-lg font-bold">Monthly jackpot</h2>
            
              
             
            </router-link>
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
