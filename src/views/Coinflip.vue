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
      class="bg-gray-100 p-6 h-full"
    >
    <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md">
      <img src="@/assets/arrow-left.svg" alt="">
    </button>
    <header class="flex justify-between items-center mb-6 ">
      <h1 class="text-3xl font-bold text-white">Recent Flips</h1>
      
    </header>
      <div class="main-content">
          <!-- Image Row Section -->
           <div class="flex justify-between items-center">
            <div class="image-row  bg-[#222121] rounded-xl shadow-xl">

          <!-- Repeat this img tag for each image in the row -->
          <div class="image-container col-span-1">
            <div class="image-wrapper ">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image">
              <img src="@/assets/Bild_2024-07-31_143409522-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
            <div class="image-wrapper right-image" style="margin-top:5px;">
              <img src="@/assets/Bild_2024-07-31_143430342-removebg-preview 3.svg" alt="Token Image" class="token-img">
            </div>
           
          
          
           
          </div>
          
       
        </div>
        <div class="col-span-4">
        <button type="submit" @click="createGame" class="create-game-btn text-2xl rounded-xl bg-[#222121]">
          Create a Game
        </button>
      </div>
    </div>
       

       

        <!-- Open Section -->
        <section class="open-section mt-5">
          <h2 class="text-2xl font-semibold text-white mb-4">Open</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <!-- Repeat card for 8 items using a for-loop -->
            <div 
              v-for="(card, index) in 8" 
              :key="index" 
              class="card bg-gray-800 p-4 rounded-xl shadow-xl bg-[#171717]" 
              style="border: 1px solid #222121;"
            >
              <p class="price text-xl text-white text-center">$15.53</p>
              <div class="item-icons flex justify-between" style="height:92px;">
                <div>
                  <img src="@/assets/Group 13.svg" alt="Item 1" class="item-img">
                </div>
                <div class="flex justify-center items-center mb-4 mr-4">
                  <p class="text-white text-lg">Open</p>
                </div>
                <div>
                  <img src="@/assets/Group 12.svg" alt="Item 2" class="item-img">
                </div>
              </div>
              <div class="text-white mb-3">
                <p>Zaqk187420</p>
              </div>
        
              <div 
                class="flex items-center gap-2 bg-[#131313] rounded-xl shadow-xl px-1 py-2 mb-4" 
                style="border:1px solid #222121;"
              >
                <img src="@/assets/50fx50f 42.svg" alt="Image 1" class="w-8 h-8">
                <img src="@/assets/50fx50f 42.svg" alt="Image 1" class="w-8 h-8">
                <img src="@/assets/50fx50f (1) 39.svg" alt="Image 2" class="w-8 h-8">
                <img src="@/assets/50fx50f (1) 39.svg" alt="Image 2" class="w-8 h-8">
                <p class="text-white text-lg" style="font-size:14px;">+15 Items</p>
              </div>
              
              <div class="card-buttons flex justify-between">
                <button type="button" class="join-btn bg-green-500 text-white px-4 py-2 rounded-xl bg-[#2BAC00]">
                  Join
                </button>
                <router-link to="/coinflip/view" class="view-btn bg-blue-500 text-white px-4 py-2 rounded-xl bg-[#D33244]">
                  View
                </router-link>
              </div>
            </div>
          </div>
        </section>


            <!-- In Progress Section -->
            <section class="open-section mt-5">
              <h2 class="text-2xl font-semibold text-white mb-4">In Progress</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <!-- Repeat card for 8 items using a for-loop -->
                <div 
                  v-for="(card, index) in 4" 
                  :key="index" 
                  class="card bg-gray-800 p-4 rounded-xl shadow-xl bg-[#171717]" 
                  style="border: 1px solid #222121;"
                >
                  <p class="price text-xl text-white text-center">$15.53</p>
                  <div class="item-icons flex justify-between" style="height:92px;">
                    <div>
                      <img src="@/assets/Group 13.svg" alt="Item 1" class="item-img">
                    </div>
                    <div class="flex justify-center items-center mb-4 mr-4">
                      <p class="text-white text-md">Flipping in 120</p>
                    </div>
                    <div>
                      <img src="@/assets/Group 14.svg" alt="Item 2" class="item-img">
                    </div>
                  </div>
                  <div class="flex justify-between items-center mb-3">
                  <div class="text-white">
                    <p>Zaqk187420</p>
                  </div>
                  <div class="text-white ">
                    <p>Quintice420</p>
                  </div>
                  </div>
            
                  <div 
                    class="flex items-center gap-2 bg-[#131313] rounded-xl shadow-xl px-1 py-2 mb-4" 
                    style="border:1px solid #222121;"
                  >
                    <img src="@/assets/50fx50f 42.svg" alt="Image 1" class="w-8 h-8">
                    <img src="@/assets/50fx50f 42.svg" alt="Image 1" class="w-8 h-8">
                    <img src="@/assets/50fx50f (1) 39.svg" alt="Image 2" class="w-8 h-8">
                    <img src="@/assets/50fx50f (1) 39.svg" alt="Image 2" class="w-8 h-8">
                    <p class="text-white text-lg" style="font-size:14px;">+15 Items</p>
                  </div>
                  
                  <div class="card-buttons flex justify-center">
            
                    <router-link to="/coinflip/view" class="view-btn bg-blue-500 text-white px-4 py-2 rounded-xl bg-[#D33244]">
                      View
                    </router-link>
                  </div>
                </div>
              </div>
            </section>

<!-- Ended Section -->
<section class="open-section mt-5">
  <h2 class="text-2xl font-semibold text-white mb-4">Ended</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <!-- Repeat card for 4 items using a for-loop -->
    <div 
      v-for="(card, index) in 4" 
      :key="index" 
      class="card bg-gray-800 p-4 rounded-xl shadow-xl bg-[#171717]" 
      style="border: 1px solid #222121;"
    >
      <p class="price text-xl text-white text-center">$15.53</p>
      <div class="item-icons flex justify-center" style="height:92px;">
        <div class="ml-4">
          <img 
            :src="getImageSrc(index)" 
            alt="Item" 
            class="item-img"
          >
        </div>
      </div>
      <div class="text-white mb-3 flex justify-center">
        <p>Zaqk187420</p>
      </div>

      <div 
        class="flex items-center gap-2 bg-[#131313] rounded-xl shadow-xl px-1 py-2 mb-4" 
        style="border:1px solid #222121;"
      >
        <img src="@/assets/50fx50f 42.svg" alt="Image 1" class="w-8 h-8">
        <img src="@/assets/50fx50f 42.svg" alt="Image 1" class="w-8 h-8">
        <img src="@/assets/50fx50f (1) 39.svg" alt="Image 2" class="w-8 h-8">
        <img src="@/assets/50fx50f (1) 39.svg" alt="Image 2" class="w-8 h-8">
        <p class="text-white text-lg" style="font-size:14px;">+15 Items</p>
      </div>
      
      <div class="card-buttons flex justify-center">
        <router-link to="/coinflip/view" class="view-btn bg-blue-500 text-white px-4 py-2 rounded-xl bg-[#D33244]">
          View
        </router-link>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>
  </div>
</template>

<script>
import Chat from "../components/common/Chat.vue";
import LoginTopBar from "../components/common/LoginTopBar.vue";
import group13 from '@/assets/Group 13.svg';
import group14 from '@/assets/Group 14.svg';

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
    createGame() {
      console.log('Create a Game button clicked');
      // Implement game creation logic here
    },
    async makeTransaction() {
      try {
        // Prepare transaction data
        const transactionData = {
          amount: 100,  // Example transaction amount
          userId: this.$store.state.user.id,
        };

        // Send transaction request to backend using fetch
        const response = await fetch('https://your-backend-api/transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if necessary
          },
          body: JSON.stringify(transactionData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        console.log('Transaction successful', responseData);

        // Handle success (e.g., update UI, show confirmation message)
      } catch (error) {
        console.error('Error:', error.message);
        // Handle error (e.g., show error message to user)
      }
    },
    getImageSrc(index) {
      if (index === 0 || index === 1) {
        return group13;
      }
      return group14;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
/* General Styles */
body {
  background-color: #1e1e1e;
  color: #ffffff;
}



.create-game-btn {
  
  color: #ffffff;
  padding: 10px 20px;

  cursor: pointer;
}


.card .avatar-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.card .price {
  font-size: 1.5em;
}


.card-buttons .join-btn, .card-buttons .view-btn {
  padding: 8px 16px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0px; /* Adjust the gap between images */
  justify-content: center; /* Centers the images horizontally */
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Optional: Add fixed dimensions if needed */
  width: 100px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
}

.token-img {
  max-width: 100%;
 
  object-fit: cover; /* Ensures the image covers the area without distortion */
}
.right-image{
 
  margin-left: -55px;

}



</style>
