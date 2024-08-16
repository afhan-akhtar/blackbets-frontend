<template>
  <div class="w-fixed relative primaryStroke rounded-lg">
    <textarea
      placeholder="Send message..."
      class="textarea-full-width py-2 pl-4 pr-10 bg-secondaryBlack text-white rounded-md focus:outline-none"
      rows="1"
    ></textarea>
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
  width: 300px; /* Set the fixed width as desired */
  resize: none; /* Disable manual resizing */
}

.textarea-full-width {
  width: 100%; /* Make textarea take the full width of the div */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
</style>
