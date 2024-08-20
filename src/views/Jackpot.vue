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
      <div class="flex justify-between items-center text-white mb-2">
        <h1 class="text-2xl ">Our Jackpots</h1>
   
      </div>

      <div class="main-content">
        
           <div class="p-6 rounded-lg shadow-lg  text-white" style="background-color: #171717; border: 3px solid #222121;">
              
         
          <div class="records  grid grid-cols-3 gap-6 text-center">
            <div class="card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121;">
           
              <h2 class="text-lg font-bold">Instant Jackpot</h2>
             
              <img src="@/assets/istockphoto-1360035898-612x612-removebg-preview 36biggest_jacpot.svg" alt="Jackpot" class=" mx-auto mb-4" />
            
            </div>
            <div class=" card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121;">
              
              <h2 class="text-lg font-bold">Hourly Jackpot</h2>
              <img src="@/assets/istockphoto-1360035898-612x612-removebg-preview 36biggest_jacpot.svg" alt="Jackpot" class=" mx-auto mb-4" />

              
            </div>
            <div class=" card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121;">
            
              <h2 class="text-lg font-bold">Daily jackpot</h2>
            
              <img src="@/assets/istockphoto-1360035898-612x612-removebg-preview 36biggest_jacpot.svg" alt="Jackpot" class=" mx-auto mb-4" />
             
            </div>
          </div>

          <div class="records mt-6  grid grid-cols-3 gap-6 text-center">
            <div class="card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121; background-image: url('src/assets/pngtree-gold-coin-rain-with-blank-background-png-image_5302322-removebg-preview 32jackpot_bg.svg'); height: 285px; ">
           
              <h2 class="text-lg font-bold">Weekly Jackpot</h2>
             
              
            
            </div>
            <div class=" card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121; background-image: url('src/assets/pngtree-gold-coin-rain-with-blank-background-png-image_5302322-removebg-preview 32jackpot_bg.svg'); height: 285px;  ">
              
              <h2 class="text-lg font-bold">Biweekly Jackpot</h2>
             
           

              
            </div>
            <div class=" card-link record-card bg-black p-6 rounded-lg text-white relative shadow-lg" style="background-color: #222121; background-image: url('src/assets/pngtree-gold-coin-rain-with-blank-background-png-image_5302322-removebg-preview 32jackpot_bg.svg'); height: 285px;  ">
            
              <h2 class="text-lg font-bold">Monthly jackpot</h2>
            
              
             
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
