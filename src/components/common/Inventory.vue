<template>
    <!-- Rows of Items -->
    <div
      v-for="(row, rowIndex) in itemRows"
      :key="'row-' + rowIndex"
      class="flex justify-center space-x-4 py-4"
      style="margin: 20px; margin-top: 0px;"
    >
      <div
        v-for="(item, itemIndex) in row"
        :key="'item-' + itemIndex"
        :class="[
          'bg-[#171717] p-2 rounded-md w-24 text-center cursor-pointer',
          selectedItems.includes(item) ? 'bg-[#9D9D9D]' : ''
        ]"
        @click="$emit('toggleItemSelection', item)"
      >
        <div class="rounded-t-xl overflow-hidden mb-2">
          <img
            src="@/assets/inventory.svg"
            alt="Item Image"
            class="object-cover w-full h-16"
          />
        </div>
        <p class="text-xs text-white">Item {{ item }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      itemRows: {
        type: Array,
        required: true,
      },
      selectedItems: {
        type: Array,
        required: true,
      },
    },
    emits: ['toggleItemSelection'],
  };
  </script>
  