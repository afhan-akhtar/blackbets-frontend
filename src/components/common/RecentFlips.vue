<template>
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
         
  
         
            <CoinFlipCards />
  
        </div>
</template>
<script>
import CoinFlipCards from '@/components/common/CoinFlipCards.vue'
import group13 from '@/assets/Group 13.svg';
import group14 from '@/assets/Group 14.svg';


export default {
    components: {
    CoinFlipCards
  },
  
  methods: {
   
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