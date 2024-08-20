<template>
    <LoginTopBar />
    <div class="flex h-screen">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-800 text-white overflow-hidden'
        ]"
      >
        <div class="p-6">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="bg-black p-6"
      >
        <!-- Header -->
        <div class="flex justify-between items-center text-white mb-2">
          <h1 class="text-2xl ">Provably Fair</h1>
     
        </div>
  
        <div class="main-content">
          
             <div class="p-6 rounded-lg shadow-lg  text-white" style="background-color: #171717; border: 3px solid #222121; height: 700px;">
                
        
        </div>
          </div>
      </div>
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
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
  background-color: #171717;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  height: 150px;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative; /* For absolute positioning of images */
  }
  
  .card img {
  width: 64px; /* Width of the images */
  height: 64px; /* Height of the images */
  position: absolute;
  top: 8px;
  right: 8px;
  }
  
  
  .card-link:hover  {
    opacity: 0.8;
    transform: scale(1.02);
  }
  
  
  </style>
  