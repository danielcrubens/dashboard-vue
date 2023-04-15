<!-- <template>
  <div class="bg-black bg-opacity-20 rounded-3xl overflow-hidden">
    <div class="header">
      <div class="h-32 flex">
        <img class="object-cover w-full h-full" src="https://via.placeholder.com/500" alt="">
      </div>
    </div>
    <div class="body relative p-5">
      <div class="absolute right-6 -top-28 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-sm text-white">7 min
      </div>
      <Avatar class="w-12 h-12 absolute right-2 -top-5 rounded-full overflow-hidden" />
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
</template> -->
<!--  -->
<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
    <div v-for="item in items" :key="item.id" class="bg-black bg-opacity-20 rounded-3xl overflow-hidden">
      <div class="header">
        <div class="h-32 flex">
          <img class="object-cover w-full h-full" :src="item.imageSrc" alt="Skater Card">
        </div>
      </div>
      <div class="body relative p-5">
        <div class="absolute right-6 -top-28 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-sm text-white">7 min
        </div>
        <div class="w-16 h-20  absolute right-2 -top-5 rounded-full overflow-hidden">
          <img class="object-none " :src="item.imageAvatar" alt="Avatar Card">
        </div>
        <h5 class="text-xs opacity-50 mb-2">{{ item.author }}
          <div class="w-2 h-2 inline-block ml-2 rounded-full bg-green-400"></div>
        </h5>
        <p>{{ item.title }}</p>
        <div class="text-xs flex items-center space-x-2 opacity-50 mt-3">
          <span>{{ item.views }} views</span>
          <div class="w-1 h-1 rounded-full bg-gray-300"></div>
          <span>{{ item.published }} ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    id: 1,
    author: "Andy William",
    title: "Basic how to ride your skateboard comfortably",
    imageSrc: "../src/assets/svg/Skater-Card1.svg",
    imageAvatar: "../src/assets/svg/AndyWilliam.svg",
    views: "53k",
    published: "2 weeks",
  },
  {
    id: 2,
    author: "Johny Wise",
    title: "Prepare for your first skateboard jump",
    imageSrc: "../src/assets/svg/Skater-Card2.svg",
    imageAvatar: "../src/assets/svg/AndyWilliam.svg",

    views: "12k",
    published: "1 month",
  },
  {
    id: 3,
    author: "Budi Hakim",
    title: "Tips to playing skateboard on the ramp",
    imageSrc: "../src/assets/svg/Skater-Card3.svg",
    imageAvatar: "../src/assets/svg/AndyWilliam.svg",

    views: "87k",
    published: "3 days",
  },
  {
    id: 4,
    author: "Wijaya Abadi",
    title: "Basic Equipment to play skateboard safely",
    imageSrc: "../src/assets/svg/Skater-Card4.svg",
    imageAvatar: "../src/assets/svg/WijayaAbadi.svg",

    views: "25k",
    published: "1 week",
  },

];
</script>

