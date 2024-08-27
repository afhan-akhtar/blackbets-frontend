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
        <CoinflipView />
      </div>
    </div>
  </template>
  
  <script>
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  import CoinflipView from "../components/common/CoinflipView.vue";
  
  export default {
  components: {
    Chat,
    LoginTopBar,
    CoinflipView
  },
  data() {
    return {
      isChatVisible: true,
     
    };
  },
  methods: {
    async makeTransaction(amount) {
      try {
        const transactionData = {
          amount,
          userId: this.$store.state.user.id,
        };

        const response = await fetch("https://your-backend-api/transaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transactionData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Transaction successful", responseData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};

  </script>
  
  
  
  <style scoped>
  
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
    height: 100px; /* Adjust as needed */
  }
  
  .token-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }
  .right-image{
   
    margin-left: -55px;
  
  }
  .hr{
    height: 2px;
    color: #9D9D9D;
  }
  .card-link:hover  {
    opacity: 0.8;
    cursor: pointer;
  }
  
  .card-link:hover {
    transform: scale(1.02);
  }
  
  
  
  </style>
  