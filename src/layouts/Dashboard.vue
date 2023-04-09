<template>
  <main class="bg-white dark:bg-gray-800 dark:text-white text-gray-800 px-2 flex  max-h-screen h-screen overflow-y-auto overflow-x-hidden">
    <div class=" w-64 sticky top-0 z-20">
      <span class="font-semibold p-6 block opacity-90">Skateboard</span>
      <nav class="p-6">
        <h3 class="opacity-50 uppercase text-xs font-semibold -tracking-wider mb-6">Menu</h3>
        <div class="space-y-6">
          <MenuItem :icon="HomeIcon" first>Dicover</MenuItem>
          <MenuItem :icon="TrendingUpIcon">Trending </MenuItem>
          <MenuItem :icon="StreamingIcon">Streaming </MenuItem>
          <MenuItem :icon="Playlist">Playlist </MenuItem>
          <MenuItem :icon="Bookmark">Bookmark </MenuItem>

          <hr class="w-auto color-red-600 space-y-28">
          <h3 class="opacity-50 uppercase text-xs font-semibold -tracking-wider mb-6">Categoty</h3>

          <MenuItem :icon="StreamingIcon">Streaming </MenuItem>
          <MenuItem :icon="Playlist">Playlist </MenuItem>
          
          <DarkMode/>

        </div> 
      </nav>
    </div>
    <div class=" p-5 flex-1 h-screen relative ">
      <header class="flex p-5 bg-white dark:bg-gray-800 sticky top-0 z-20 items-center justify-between">
        <InputSearch class="w-96" />

        <div class="flex items-center">
          <div class="flex items-center space-x-3">
            <!--  <Dropdown> -->
            <Avatar class=" w-10 h-10 rounded-full overflow-hidden " />
            <span>Thomas</span>
            <ChevronDownIcon class="w-4 h-4" />
            <!-- </Dropdown> -->
          </div>
          <BellIcon class="w-5 h-5 ml-8 opacity-50 hover:opacity-100 cursor-pointer transition duration-100" />
          <Notifications />
        </div>
      </header> 
      <div class="px-5 pb-5">
        <h1 class="font-bold text-4xl mt-6 mb-4">Discover</h1>
        <div class="grid gap-4 grid-cols-12">
          <div class="col-span-8 h-96 rounded-3xl overflow-hidden relative">
            <div class=" flex w-full h-full">
              <img class="object-cover w-full h-full" src="https://picsum.photos/2000/1400" alt="Imagem">
            </div>
            <div class="z-10 absolute top-0 p-6 w-full bottom-0">
              <h3 class="text-2xl max-w-xs">How to do Basic Jumping and how to landing safely</h3>
              <div class="absolute right-6 bottom-6 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-white">7 minutes
              </div>
            </div>
          </div>
          <div class="col-span-4 h-96 rounded-3xl overflow-hidden relative">
            <div class=" flex w-full h-full">
              <img class="object-cover w-full h-full" src="https://picsum.photos/2000/1400" alt="Imagem">
            </div>
            <div class="z-10 absolute top-0 p-6 w-full bottom-0">
              <h3 class="text-2xl max-w-xs">How to do Basic Jumping and how to landing safely</h3>
              <div class="absolute right-6 bottom-6 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-white">7 minutes
              </div>
            </div>
          </div>
        </div>
        <h1 class=" text-2xl mt-6 mb-4">Most Watched</h1>
        <div class="grid grid-cols-4 gap-4">
          <CardItem v-for="n  of 4 " :key="n" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import MenuItem from './navs/MenuItem.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';
import TrendingUpIcon from '../components/icons/TrendingUpIcon.vue';
import InputSearch from '../components/inputs/inputSearch.vue'
import Avatar from '../components/Avatar.vue'
import ChevronDownIcon from '../components/icons/ChevronDownIcon.vue'
import BellIcon from '../components/icons/BellIcon.vue'
import CardItem from '../components/CardItem.vue'
import StreamingIcon from '../components/icons/StreamingIcon.vue'
import Playlist from '../components/icons/Playlist.vue'
import Bookmark from '../components/icons/Bookmark.vue'
import DarkMode from './navs/DarkMode.vue'
</script>