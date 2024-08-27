<template>
    <LoginTopBar />
    <div class="flex min-h-screen bg-black text-white overflow-hidden">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-900'
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
        <div class="main-content text-center h-full ">
          <!-- Current Items Section -->
          <transition name="fade" mode="out-in">
            <div
              key="page-{{ currentPage }}" 
              class="py-6 px-0 rounded-xl shadow-xl bg-gray-900 border-gray-700"
              style="width: 800px; background-color: #222121;"
            >
              <p class="font-bold text-xl">Affiliate Withdraw</p>
              <hr class="color-hr" />
  
              <!-- Rows of Items -->
              <Inventory
            :itemRows="itemRows"
            :selectedItems="selectedItems"
            @toggleItemSelection="toggleItemSelection"
          />
  
              <!-- Pagination and Deposit Button Section -->
              <div class="mt-4 flex justify-between items-center px-16">
                <button @click="prevPage" :disabled="currentPage === 1" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#171717">
                  <img src="@/assets/_left.svg" alt="">
                </button>
                <span style="background-color:#171717" class="p-2 bg-gray-700 rounded-lg shadow">{{ currentPage }} / {{ totalPages }}</span>
                <div
                  class="bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-gray-800"
                >
                  <p class="text-white mr-8 text-lg">
                    {{ selectedItems.length > 0 ? selectedItems.length + ' item' + (selectedItems.length > 1 ? 's' : '') + ' selected' : '0 Items selected' }}
                    <div>
                      <p>Available Funds $2.23</p>
                    </div>
                  </p>
                </div>
                <div
                  class="bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-gray-800"
                >
                  <button type="submit" @click="handleTransaction" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded" style="background-color: #171717;">
                    Withdraw
                  </button>
                </div>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#171717">
                  <img src="@/assets/_right.svg" alt="">
                </button>
              </div>
            </div>
          </transition>
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
        items: Array.from({ length: 624 }, (_, i) => i + 1), // Example array of 624 items (26 pages x 24 items)
        selectedItems: [], // Array to store selected items
        hasSelectedOnce: false, // Track if an item has been selected at least once
        currentPage: 1,
        itemsPerPage: 24, // Set the number of items per page to 24
      };
    },
    computed: {
      totalPages() {
        return 26; // Fixed total pages to 26
      },
      paginatedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.items.slice(startIndex, endIndex);
      },
      itemRows() {
        const rows = [];
        const itemsToShow = this.paginatedItems;
        for (let i = 0; i < itemsToShow.length; i += 6) {
          rows.push(itemsToShow.slice(i, i + 6));
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
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
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
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  .list-fade-enter-active, .list-fade-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .list-fade-enter, .list-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>
