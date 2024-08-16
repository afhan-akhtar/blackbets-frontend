import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('authStore', () => {
  // State
  const user = ref(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const error = ref(null)

  console.log(import.meta.env.VITE_APP_BACKEND_SERVER)

  // Actions
  const fetchUserStatus = async () => {
    console.log('fetchUserStatus function has been called') // Log to check execution
    isLoading.value = true
    error.value = null

    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_BACKEND_SERVER + '/api/user/status',
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include cookies in the request
        }
      )

      user.value = response.data.user
      isAuthenticated.value = true
      console.log('success')
    } catch (err) {
      if (err.response && err.response.status === 401) {
        error.value = 'Unauthorized. Please log in.'
        console.log('Unauthorized')
      } else {
        error.value = err.message || 'An error occurred'
      }
      isAuthenticated.value = false
      user.value = null
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
  }

  // Getters
  const userRole = computed(() => (user.value ? user.value.role : null))

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    fetchUserStatus,
    logout,
    userRole
  }
})
