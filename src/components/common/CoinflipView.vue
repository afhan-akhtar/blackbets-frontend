<template>
    <div class="main-content px-4 bg-[#222121] rounded-xl card shadow-xl">
      <Users :users="users" />
      <Stats :stats="stats" />
      <hr class="hr" />
      <Items :items="items" />
    </div>
  </template>
  
  <script>
  import Users from '@/components/common/Users.vue';
  import Stats from '@/components/common/Stats.vue';
  import Items from '@/components/common/Items.vue';
  
  import Rectangle1741 from "@/assets/Rectangle 1741.svg";
  import Rectangle1742 from "@/assets/Rectangle 1742.svg";
  import Image11 from "@/assets/image 11.svg";
  import Image1089 from "@/assets/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ze4GPFfCk4nReh8DEiv5daOK47rbM2R_m-2xOvlqs 1089.svg";
  
  export default {
    components: {
      Users,
      Stats,
      Items
    },
    data() {
      return {
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
  
  