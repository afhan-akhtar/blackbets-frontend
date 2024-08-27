<template>
    <LoginTopBar />
    <div class="flex min-h-screen bg-black text-white overflow-hidden">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-900 '
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
        class="flex flex-col justify-center items-center overflow-hidden "
      >
       <!-- Go Back Button -->
       <div class="row w-full p-4 mt-3">
        <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md">
          <img src="@/assets/arrow-left.svg" alt="">
        </button>
      </div>
      
        <div class="main-content text-center h-full">
          <!-- Current Items Section -->
          <div
            class="py-6 px-0 rounded-xl shadow-xl bg-gray-900 border-gray-700"
            style="width: 800px; background-color: #222121;"
          >
            <p class="font-bold mb-4 text-xl">My Inventory</p>
            <hr class="color-hr" />
  
            <!-- Centered Image -->
            <div class="flex justify-center py-4">
              <img src="@/assets/Rectangle 1215.svg" alt="Centered Image" />
            </div>
  
            <!-- Rows of Items -->
            <Inventory
            :itemRows="itemRows"
            :selectedItems="selectedItems"
            @toggleItemSelection="toggleItemSelection"
          />
            
         <!-- Deposit Button Section -->
<div
v-if="hasSelectedOnce" class="bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-gray-800"
>
<p class="text-white mr-8 text-lg">
  {{ selectedItems.length > 0 ? selectedItems.length + ' item' + (selectedItems.length > 1 ? 's' : '') + ' selected' : '0 Items selected' }}
</p>
<button type="submit"  @click="handleTransaction"
  class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-10 rounded" style="background-color: #9D9D9D;"
>
  Deposit
</button>
</div>

          </div>
  
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  import Inventory from "../components/common/Inventory.vue";
  
  export default {
    components: {
      Chat,
      LoginTopBar,
      Inventory
    },
    data() {
        return {
      isChatVisible: true,
      items: Array.from({ length: 24 }, (_, i) => i + 1), // Example array of items
      selectedItems: [], // Array to store selected items
      hasSelectedOnce: false, // Track if an item has been selected at least once
    };
  },
    computed: {
      itemRows() {
        const rows = [];
        for (let i = 0; i < this.items.length; i += 6) {
          rows.push(this.items.slice(i, i + 6));
        }
        return rows;
      },
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
      toggleItemSelection(item) {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1); // Deselect the item
      } else {
        this.selectedItems.push(item); // Select the item
        this.hasSelectedOnce = true; // Mark that an item has been selected
      }
    },
    async handleTransaction() {
    try {
      const response = await axios.post('/api/transaction', {
        items: this.selectedItems,
      });
      
      if (response.status === 200) {
        // Handle successful transaction
        alert('Transaction successful!');
        // Optionally clear selected items or handle UI changes
        this.selectedItems = [];
        this.hasSelectedOnce = false;
      }
    } catch (error) {
      // Handle error
      console.error('Transaction failed', error);
      alert('Transaction failed, please try again.');
    }
  },
  goBack() {
      this.$router.go(-1);
    },
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    max-width: 800px;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow-x: hidden; /* Disable horizontal scrolling */
  }
  
  .circle-timer {
    background-color: #202020;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    position: relative;
    overflow: hidden;
  }
  
  .circle-timer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .circle-timer p {
    margin: 0;
  }
  
  html,
  body {
    overflow-x: hidden; /* Disable horizontal scrolling on the entire page */
  }
  
  .color-hr {
    border: 0; /* Remove default border */
    height: 2px; /* Adjust the height of the line */
    background-color: #9d9d9d; /* Set your desired color */
  }
  </style>
  