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
      <RecentFlips />
    </div>
  </div>
</template>

<script>
import Chat from "../components/common/Chat.vue";
import LoginTopBar from "../components/common/LoginTopBar.vue";
import RecentFlips from "../components/common/RecentFlips.vue";


export default {
  components: {
    Chat,
    LoginTopBar,
    RecentFlips
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
