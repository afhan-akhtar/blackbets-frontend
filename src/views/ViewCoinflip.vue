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
        <div class="main-content px-4 bg-[#222121] rounded-xl card shadow-xl">
          <div class="flex justify-around items-center pt-8">
            <div v-for="(user, index) in users" :key="index">
              <img :src="user.imageSrc" :alt="user.name" />
              <div class="flex justify-center text-white">
                <p>{{ user.name }}</p>
              </div>
            </div>
          </div>
  
          <div class="flex mt-8">
            <div v-for="(stat, index) in stats" :key="index" class="w-1/2 px-8 pb-0 pt-8">
              <div class="flex justify-around items-center bg-gray-700 px-0 text-white">
                <p class="text-lg font-bold">{{ stat.value }}</p>
                <p>{{ stat.percentage }}</p>
              </div>
            </div>
          </div>
          <hr class="hr" />
  
          <div v-for="(item, index) in items" :key="index" class="flex mt-8">
            <div class="w-1/2 px-16 pb-0 pt-0 mb-4" v-for="side in [0, 1]" :key="side">
              <router-link to="/coinflip/inventory" class="text-white card card-link rounded-xl shadow-xl flex justify-around items-center bg-[#171717] py-4">
                <div class="flex items-center justify-start">
                  <img :src="item.imageSrc" alt="" />
                  <p>{{ item.title }}</p>
                </div>
                <div>
                  <p>{{ item.price }}</p>
                </div>
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
  
  // Import images
  import Rectangle1741 from "@/assets/Rectangle 1741.svg";
  import Rectangle1742 from "@/assets/Rectangle 1742.svg";
  import Image11 from "@/assets/image 11.svg";
  import Image1089 from "@/assets/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ze4GPFfCk4nReh8DEiv5daOK47rbM2R_m-2xOvlqs 1089.svg";
  
  export default {
  components: {
    Chat,
    LoginTopBar,
  },
  data() {
    return {
      isChatVisible: true,
      users: [
        { name: "Zaqk187420", imageSrc: Rectangle1741 },
        { name: "Quintice420", imageSrc: Rectangle1742 },
      ],
      stats: [
        { value: "$1.32", percentage: "48.72%" },
        { value: "$1.32", percentage: "48.72%" },
      ],
      items: [
        {
          title: "Pirate Treasures Door",
          price: "$0.68",
          imageSrc: Image11,
        },
        {
          title: "Pirate Treasures Door",
          price: "$0.64",
          imageSrc: Image1089,
        },
        {
            title: "Pirate Treasures Door",
          price: "$1.24",
          imageSrc: Image11,
        },
        {
            title: "Pirate Treasures Door",
          price: "$0.89",
          imageSrc: Image1089,
        },
        {
            title: "Pirate Treasures Door",
          price: "$2.35",
          imageSrc: Image11,
        },
        {
            title: "Pirate Treasures Door",
          price: "$3.12",
          imageSrc: Image1089,
        },
        {
            title: "Pirate Treasures Door",
          price: "$5.00",
          imageSrc: Image11,
        },
        {
            title: "Pirate Treasures Door",
          price: "$7.50",
          imageSrc: Image1089,
        },
        {
            title: "Pirate Treasures Door",
          price: "$10.99",
          imageSrc: Image11,
        },
        {
            title: "Pirate Treasures Door",
          price: "$15.99",
          imageSrc: Image1089,
        },
      ],
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
  