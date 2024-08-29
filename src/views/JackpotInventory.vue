<template>
  <div v-if="isVisible" class="popup-overlay">
    <div class="popup-content rounded-xl shadow-xl">
      <!-- Current Items Section -->
       <div class="flex justify-start itmes-center p-3 pb-0">
        <button @click="closePopup" class=" py-1 px-2 rounded-md mb-2">
          <img src="@/assets/arrow-left.svg" alt="">
        </button>
       </div>
      
      <div class="p-0 bg-gray-900 border-gray-700" style="width: 800px;">
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
          v-if="hasSelectedOnce"
          class="bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-gray-800"
        >
          <p class="text-white mr-8 text-lg">
            {{ selectedItems.length > 0 ? selectedItems.length + ' item' + (selectedItems.length > 1 ? 's' : '') + ' selected' : '0 Items selected' }}
          </p>
          <button type="submit" @click="handleTransaction"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-10 rounded"
            style="background-color: #9D9D9D;"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inventory from "@/components/common/Inventory.vue";

export default {
  components: {
    Inventory,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: Array.from({ length: 24 }, (_, i) => i + 1),
      selectedItems: [],
      hasSelectedOnce: false,
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
    toggleItemSelection(item) {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      } else {
        this.selectedItems.push(item);
        this.hasSelectedOnce = true;
      }
    },
    async handleTransaction() {
      try {
        const response = await axios.post('/api/transaction', {
          items: this.selectedItems,
        });

        if (response.status === 200) {
          alert('Transaction successful!');
          this.selectedItems = [];
          this.hasSelectedOnce = false;
        }
      } catch (error) {
        console.error('Transaction failed', error);
        alert('Transaction failed, please try again.');
      }
    },
    closePopup() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow-y: auto; /* Enable Y-axis scrolling */
  overflow-x: hidden;
}

.popup-content {
  position: relative;
  width: 800px;
  background-color: #222121;
  border-radius: 8px;
  max-height: 95vh; /* Set max height for the popup */
  overflow-y: auto; /* Ensure content within the popup can scroll */
  overflow-x: hidden;
}
.color-hr {
  border: 0; /* Remove default border */
  height: 2px; /* Adjust the height of the line */
  background-color: #9D9D9D; /* Set your desired color */
}
</style>
