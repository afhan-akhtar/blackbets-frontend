<template>
    <LoginTopBar />
    <div class="flex h-screen">
      <!-- Sidebar (Chat) -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-800 text-white overflow-hidden'
        ]"
      >
        <div class="p-6" style="height:calc(100vh - 100px); overflow-y: auto">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="bg-gray-100 p-6" style="height:calc(100vh - 70px); overflow-y: auto"
      >
        <header class="flex justify-between items-center text-white pt-1 pb-0 px-0">
          <div class="flex-grow bg-blue-500 p-4 rounded-tl-md rounded-tr-md" style="background-color: #222121;">
            <span class="text-2xl">Username</span>
          </div>
          <div class="flex-grow"></div>
          <div class="flex-grow bg-blue-500 p-4 rounded-tl-md rounded-tr-md" style="background-color: #222121;">
            <span class="flex justify-between text-2xl"><span>Total users </span><span>1204</span></span>
          </div>
        </header>
        
        <div class="bg-[#171717] p-6 w-full flex flex-col text-white h-[90%] border-7 rounded-bl-lg rounded-br-lg" style="border: 7px solid #222121; ">
            <div class="flex-1 overflow-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="text-start p-2 text-xl">User</th>
                    <th class="text-start p-2 text-xl relative cursor-pointer flex items-center">
                      Total Wagered
                      <span class="dropdown-icon"></span>
                    </th>
                    <th class="text-start p-2 text-xl">Profit</th>
                    <th class="text-start p-2 text-xl">History</th>
                    <th class="text-start p-2 text-xl">Code</th>
                    <th class="text-start p-2 text-xl">Used</th>
                  </tr>
                </thead>
                <transition name="fade" mode="out-in">
                  <tbody :key="currentPage">
                    <tr @click="openBanModal" class="hover:bg-gray-700 border-bottom" style="background-color: #222121; cursor:pointer;">
                      <td class="text-start p-2 text-lg flex items-center">
                        <img src="@/assets/Ellipse 120user.svg" alt="" class="mr-2"> <!-- Add margin-right to separate image and text -->
                        <span>Quintice420</span>
                      </td>
                      <td class="text-start p-2 text-lg">$3242.21</td>
                      <td class="text-start p-2 text-lg">$15.12</td>
                      <td class="text-start p-2 text-lg">View</td>
                      <td class="text-start p-2 text-lg">Pinkyy</td>
                      <td class="text-start p-2 text-lg">Elliot</td>
                      <td class="text-start p-2 text-lg cursor-pointer">Chatban</td>
                      <td class="text-start p-2 text-lg">Ban</td>
                    </tr>
          
                    <tr @click="openBanModal" class="hover:bg-gray-700 border-bottom" style="background-color: #222121; cursor:pointer;">
                      <td class="text-start p-2 text-lg flex items-center">
                        <img src="@/assets/Ellipse 120user.svg" alt="" class="mr-2"> <!-- Add margin-right to separate image and text -->
                        <span>Gooner187420</span>
                      </td>
                      <td class="text-start p-2 text-lg">$532.53</td>
                      <td class="text-start p-2 text-lg">-$2.32</td>
                      <td class="text-start p-2 text-lg">View</td>
                      <td class="text-start p-2 text-lg">Elliot</td>
                      <td class="text-start p-2 text-lg">Pinkyy</td>
                      <td class="text-start p-2 text-lg cursor-pointer">Chatban</td>
                      <td class="text-start p-2 text-lg">Ban</td>
                    </tr>
                    
                  </tbody>
                </transition>
              </table>
            </div>
          
            <footer class="mt-4 p-2 bg-gray-700 rounded-lg">
              <div class="flex justify-between items-center">
                <button @click="prevPage" :disabled="currentPage === 1" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
                  <img src="@/assets/_left.svg" alt="">
                </button>
                <span  style="background-color:#222121" class="p-2 bg-gray-700 rounded-lg shadow">{{ currentPage }} / {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
                  <img src="@/assets/_right.svg" alt="">
                </button>
              </div>
            </footer>
          </div>
          
      </div>
  
      <!-- Ban Confirmation Modal -->
      <transition name="fade">
        <div v-if="showBanModal" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div class="bg-[#131313] p-8 rounded-lg text-white w-96 max-w-lg shadow-lg">
            <p class="text-center mb-6 text-xl">Are you sure?</p>
            <div class="flex justify-between">
              <button @click="confirmBan" class="bg-red-600 px-6 py-3 rounded-lg text-lg" style="background-color: #212121;">Yes</button>
              <button @click="cancelBan" class="bg-gray-600 px-6 py-3 rounded-lg text-lg" style="background-color: #212121;">No</button>
            </div>
          </div>
        </div>
      </transition>
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
        currentPage: 1,
        totalPages: 26,
        showBanModal: false,
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
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
      openBanModal() {
        this.showBanModal = true;
      },
      confirmBan() {
        this.showBanModal = false;
        // Implement ban logic here
        // alert("User has been banned!");
      },
      cancelBan() {
        this.showBanModal = false;
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

    },
  };
  </script>
  
  <style scoped>
  /* Style the dropdown icon */
  .dropdown-icon {
    display: inline-block;
    position: relative;
    width: 16px; /* Increase width */
   /* Increase height */
  }
  
  .dropdown-icon::before {
    content: "";
    display: inline-block;
    width: 16px; /* Match width of the container */
   /* Match height of the container */
    border-left: 8px solid transparent; /* Increase thickness */
    border-right: 8px solid transparent; /* Increase thickness */
    border-top: 8px solid #fff; /* Increase thickness and color */
    position: absolute;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Center the pseudo-element */
    margin-left: 5px; /* Reset margin-left since the icon is centered */
  }
  .border-bottom {
    border-bottom: 20px solid #171717;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  /* Additional styles for modal */
  .fixed {
    position: fixed;
  }
  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .flex {
    display: flex;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .bg-opacity-75 {
    background-color: rgba(0, 0, 0, 0.75);
  }
  .w-96 {
    width: 24rem;
  }
  .max-w-lg {
    max-width: 32rem;
  }
  .p-8 {
    padding: 2rem;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  .text-lg {
    font-size: 1.125rem;
  }
  </style>
  