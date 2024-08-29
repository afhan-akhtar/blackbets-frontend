<template>
    <div>
      <!-- Value and Button Section -->
      <div class="flex justify-between items-center mb-0 rounded-full shadow-xl p-8 card" style="background-color:#171717; height: 188px; margin-top:-210px;">
        <p class="text-2xl ">${{ amount.toFixed(2) }}</p>
        <p class="text-2xl ">30/200</p>
      </div>
      <div class="flex justify-between items-center mb-0 rounded-xl p-4" style="background-color:#222121; margin-bottom:-30px; box-shadow: 0px 4px 6px #171717; margin-left:80px; margin-right: 80px;">
        <button type="button" class="text-xl" @click.prevent="openInventory">See Inventory</button>
        <button type="button" class="text-xl" @click.prevent="openHistory">Jackpot History</button>
      </div>
      
      <button type="submit" @click="handleTransaction" class="card text-2xl text-black px-6 py-3 font-bold" style="background-color: #222121; clip-path: polygon(0% 0%, -50% 0%, 100% 0%, 100% 0%, 90% 100%, 10% 100%); box-shadow: 0px 4px 6px #171717;">
        DEPOSIT
        <p class="mt-4 text-lg">Instant Jackpot</p>
      </button>
       <!-- Inventory Popup -->
    <JackpotInventory :isVisible="isPopupVisible" @close="closePopup" />
    <JackpotHistory :isHistoryVisible="isHistoryVisible" @close="closeHistoryPopup" />
    </div>
  </template>
  
  <script>
  import JackpotInventory from "@/views/JackpotInventory.vue";
  import JackpotHistory from "@/views/JackpotHistory.vue";
  export default {
    components: {
      JackpotInventory,
      JackpotHistory
  },
    props: {
      amount: {
        type: Number,
        default: 0
      }
    },
    data() {
    return {
      isPopupVisible: false,
      isHistoryVisible: false,
    };
  },
    methods: {
      handleTransaction() {
        this.$emit('handleTransaction');
      },
      openInventory() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    openHistory() {
      this.isHistoryVisible = true;
    },
    closeHistoryPopup() {
      this.isHistoryVisible = false;
    },
    }
  }
  </script>
  
  <style scoped>
  .card {
    background-color: #222121;
  }
  </style>
  