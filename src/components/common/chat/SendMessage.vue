<template>
  <div class="w-fixed relative primaryStroke rounded-lg py-8 px-0 shadow-xl">
    <input
      placeholder="Send message..."
      class="textarea-full-width py-2 pl-4 pr-10 bg-secondaryBlack text-white rounded-md focus:outline-none"
      rows="1"
    >
  </div>
</template>

<script>
export default {
  name: 'SendMessage'
}
</script>

<style scoped>
/* You can add custom styles here if needed */
.w-fixed {
  width: 360px; /* Set the fixed width as desired */
  height: 100px;
  resize: none; /* Disable manual resizing */
}

.textarea-full-width {
  width: 100%; /* Make textarea take the full width of the div */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
.textarea-full-width::placeholder {
 color:#fff;
 font-size: x-large;
}
</style>
