<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 md:gap-8 gap-10">
    <div v-for="item in items" :key="item.id" class="dark:bg-card bg-white  dark:shadow-none shadow-lg  rounded-3xl overflow-hidden">
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
          <div class="w-1 h-1 rounded-full dark:bg-gray-300 bg-black"></div>
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
    imageSrc: "https://i.ibb.co/7z3Q9KV/Skater-Card1.webp",
    imageAvatar: "https://i.ibb.co/PjMYn26/Andy-William.png",
    views: "53k",
    published: "2 weeks",
  },
  {
    id: 2,
    author: "Johny Wise",
    title: "Prepare for your first skateboard jump",
    imageSrc: "https://i.ibb.co/j8ykZ0Y/Skater-Card2.webp",
    imageAvatar: "https://i.ibb.co/L8GZWc3/Johny-Wise.png",

    views: "12k",
    published: "1 month",
  },
  {
    id: 3,
    author: "Budi Hakim",
    title: "Tips to playing skateboard on the ramp",
    imageSrc: "https://i.ibb.co/Gd2PN1L/Skater-Card3.webp",
    imageAvatar: "https://i.ibb.co/6DS3BW1/Budi-Hakim.png",

    views: "87k",
    published: "3 days",
  },
  {
    id: 4,
    author: "Wijaya Abadi",
    title: "Basic Equipment to play skateboard safely",
    imageSrc: "/src/assets/svg/Skater-Card4.svg",
    imageAvatar: "/src/assets/svg/WijayaAbadi.svg",

    views: "25k",
    published: "1 week",
  },

];
</script>

