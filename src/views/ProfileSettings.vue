<template>
  <TopBar />
  <div class="flex h-screen flex-col xl:flex-row">
    <!-- Chat Section -->
    <div
    :class="[
      'transition-all duration-300 ease-in-out',
      isChatVisible ? 'w-2/11' : 'w-0',
      isChatVisible ? 'block' : 'hidden',
      'bg-gray-800 text-white overflow-hidden'
    ]"
  >
      <div class="p-6 h-full overflow-y-auto">
        <Chat />
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="bg-gray-100 p-6 h-full overflow-y-auto"
    >
      <!-- <button @click="toggleChat" class="mb-4 p-2 bg-blue-500 text-white rounded">
        Toggle Chat
      </button> -->
      <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md mb-2">
        <img src="@/assets/arrow-left.svg" alt="">
      </button>
        <div >
          <!-- Main content goes here -->
          <!-- Main Card Section -->
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg  main-card" style="background-color: #171717; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); border: 3px solid #222121;  ">
            <div class="text-white text-center mb-4"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap">
              <!-- Card 1: User Management -->
              <router-link to="/users" class="card-link">
                <div
                  class="flex items-center justify-center text-white rounded-lg card"
                >
                  <h3 class="text-lg font-bold">User Management</h3>
                </div>
              </router-link>
  
              <!-- Card 2: Dashboard -->
              <router-link to="/dashboard" class="card-link">
                <div
                  class="flex items-center justify-center text-white rounded-lg card"
                >
                  <h3 class="text-lg font-bold">Dashboard</h3>
                </div>
              </router-link>
  
              <!-- Card 3: Settings -->
              <router-link to="/settings" class="card-link">
                <div
                  class="flex items-center justify-center text-white rounded-lg card"
                >
                  <h3 class="text-lg font-bold">Settings</h3>
                </div>
              </router-link>
  
              <!-- Card 4: Miscellaneous -->
              <router-link to="/miscellaneous" class="card-link">
                <div
                  class="flex items-center justify-center text-white rounded-lg card"
                >
                  <h3 class="text-lg font-bold">Miscellaneous</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import Chat from '../components/common/Chat.vue'
   import TopBar from '../components/common/TopBar.vue'
  
  export default {
    components: {
      Chat,
      TopBar
    },
    data() {
      return {
        isChatVisible: true
      }
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible
      },
      async makeTransaction() {
        try {
          const response = await fetch('https://your-backend-api/transaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: 100,  // Example transaction data
              userId: this.$store.state.user.id,  
            }),
          });
  
          if (!response.ok) {
            throw new Error('Transaction failed');
          }
  
          const result = await response.json();
          console.log('Transaction successful', result);
  
          // Handle success, update UI, etc.
        } catch (error) {
          console.error('Error:', error);
          // Handle error, show error message, etc.
        }
      },
      goBack() {
      this.$router.go(-1);
    },
    }
  }
  </script>
  
  <style scoped>
  .main-card {
    padding-top: 20px;
    padding-left: 110px;
    padding-right: 110px;
    padding-bottom: 30px;
  }
  
  .gap {
    gap: 4rem;
  }
  
  .card {
    background-color: #222221;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    height: 230px;
    transition: opacity 0.3s ease-in-out;
  }
  
  .card-link:hover .card {
    opacity: 0.8;
  }
  
  .card-link {
    display: block;
    transition: all 0.3s ease;
  }
  
  .card-link:hover {
    transform: scale(1.02);
  }
  
  </style>