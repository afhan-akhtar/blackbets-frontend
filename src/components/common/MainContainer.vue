<template>
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
      <div class="p-4">
        <h2 class="text-xl font-semibold">Chat</h2>
        <!-- Chat content goes here -->
        <Chat />
        <p class="mt-4">This is the chat section.</p>
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="bg-gray-100 p-6"
    >
      <div>
        <!-- Main content goes here -->
        <!-- Main Card Section -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg mt-6 main-card" style="background-color: #171717; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);">
          <div class="text-white text-center mb-4"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap">
            <!-- Card 1: User Management -->
            <router-link to="/user-management" class="card-link">
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
import Chat from './Chat.vue'

export default {
  components: {
    Chat
  },
  data() {
    return {
      isChatVisible: true
    }
  },
  methods: {
    toggleChat() {
      this.isChatVisible = !this.isChatVisible
    }
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

