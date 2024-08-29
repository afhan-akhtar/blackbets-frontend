<template>
  <div v-if="isCoinVisible" class="popup-overlay">
    <div class="popup-content rounded-xl shadow-xl">
      <!-- Close Button -->
      <button @click="closeCoinPopup" class="close-button">
        <img src="@/assets/arrow-left.svg" alt="Close">
      </button>
      
      <!-- CoinflipView Component -->
      <CoinflipView />
    </div>
  </div>
</template>

<script>
import CoinflipView from "../components/common/CoinflipView.vue";

export default {
  components: {
    CoinflipView
  },
  props: {
    isCoinVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeCoinPopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
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

.close-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}
</style>
