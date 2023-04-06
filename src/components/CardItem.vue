<template>
  <div class="bg-black bg-opacity-20 rounded-3xl overflow-hidden">
    <div class="header">
      <div class="h-32 flex">
        <img class="object-cover w-full h-full" src="https://via.placeholder.com/500" alt="">
      </div>
    </div>
    <div class="body relative p-5">
      <Avatar class="w-12 h-12 absolute right-2 -top-5 rounded-full overflow-hidden"/>
      <h5 class="text-xs opacity-50 mb-2">Andy William
         <div class="w-2 h-2 inline-block ml-2 rounded-full bg-green-400"></div>
        </h5>
      <p>Basic how to ride your skateboard comfortly</p>
      <div class="text-xs flex items-center space-x-2 opacity-50 mt-3">
        <span>53k views</span>
        <div class="w-1 h-1 rounded-full bg-gray-300"></div>
        <span>2 weeks ago</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from "./Avatar.vue";

</script>