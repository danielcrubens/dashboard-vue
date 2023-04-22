<template>
  <main
    class="bg-white  dark:bg-dark-body  dark:text-white text-gray-800 px-2 flex  max-h-screen h-screen overflow-y-auto overflow-x-hidden">
    <div class=" w-64 lg:block hidden top-10 z-20">
      <span class="font-semibold pt-12 px-6 block opacity-90">Skateboard</span>
      <nav class="p-6">
        <h3 class="opacity-50 uppercase text-xs  font-semibold -tracking-wider mb-6">Menu</h3>
        <div class="space-y-6 ">
          <MenuItem :icon="HomeIcon" first>Dicover</MenuItem>
          <MenuItem :icon="TrendingUpIcon">Trending </MenuItem>
          <MenuItem :icon="StreamingIcon">Streaming </MenuItem>
          <MenuItem :icon="Playlist">Playlist </MenuItem>
          <MenuItem :icon="Bookmark">Bookmark </MenuItem>
          <div class="pt-6 pb-6">
            <hr class="w-auto  opacity-30 ">
          </div>
          <h3 class="opacity-50 uppercase text-xs font-semibold -tracking-wider mb-6">Categoty</h3>
          <MenuItem :icon="HomeIcon">Live Stream</MenuItem>
          <MenuItem :icon="TrendingUpIcon">Tutorial </MenuItem>
          <MenuItem :icon="StreamingIcon">Competition </MenuItem>
          <MenuItem :icon="Playlist">Community </MenuItem>
          <div class="pt-6 pb-6">
            <hr class="w-auto  opacity-30 ">
          </div>

          <DarkMode />

        </div>
      </nav>
    </div>
    <div class=" p-5 flex-1 h-screen relative ">
      <header
        class="flex lg:p-5 bg-white dark:bg-dark-body sticky space-x-3 md:space-x-auto top-0 z-20 items-center justify-between hidden md:block">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-24">
            <div class="flex justify-center md:col-span-2">
              <InputSearch class="lg:w-full md:w-96" />
            </div>
            <div class="flex justify-end">
              <div class="flex items-center">
                <div class="flex items-center space-x-3">
                  <Avatar class=" w-9 h-9 rounded-full overflow-hidden " />
                  <span>Thomas</span>
                  <ChevronDownIcon class="w-4 h-4" />
                </div>
                <BellIcon class="w-5 h-5 ml-8 opacity-50 hover:opacity-100 cursor-pointer transition duration-100" />
                <Notifications />
              </div>
            </div>
          </div>
        </div>

      </header>

      <header class="md:hidden block">
        <div class="container">
          <div class="flex justify-between items-center">
            <InputSearch class="w-full" />
            <BellIcon class="w-5 h-5 ml-8 opacity-50 hover:opacity-100 cursor-pointer transition duration-100" />
          </div>
        </div>
      </header>

      <div class=" md:my-12 my-10 flex justify-evenly lg:hidden block">
        <MenuItem :icon="HomeIcon" first>
        </MenuItem>
        <MenuItem :icon="TrendingUpIcon">
        </MenuItem>
        <MenuItem :icon="StreamingIcon">
        </MenuItem>
        <MenuItem :icon="Playlist">
        </MenuItem>
        <MenuItem :icon="Bookmark">
        </MenuItem>
      </div>

      <div class="md:px-5 md:pb-5">
        <h1 class="font-semibold lg:text-4xl md:text-3xl text-3xl mt-10 lg:mt-6 mb-4">Discover</h1>
        <div class="grid gap-4 grid-cols-12">
          <div class="lg:col-span-8 col-span-12 h-96 rounded-3xl overflow-hidden relative">
            <div class=" flex w-full h-full">
              <img class="object-cover w-full h-full" src="src/assets/images/skater.webp" alt="Skater">
              <div class="absolute inset-0 bg-menu-icon opacity-50 dark:bg-black "></div>

            </div>
            <div class="z-10 absolute top-0 p-6 w-full bottom-0">
              <h2 class="lg:text-3xl text-2xl  max-w-xs font-semibold mt-20 md:mt-auto md:ml-4">How to do Basic Jumping
                and how to landing safely</h2>
              <div class="container flex justify-start items-center md:mt-14">
                <div class="md:ml-4">
                  <div class="w-16 h-20 rounded-full overflow-hidden">
                    <img class="object-none w-full h-full  " src="src/assets/images/ThomasHope.svg" alt="Thomas Hope">
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="font-medium">Thomas Hope</h3>
                  <div class="flex  gap-2 text-sm">
                    <p>52k views</p> <span class="flex justify-start items-center">•</span>
                    <p>2 weeks</p>
                  </div>
                </div>
              </div>
              <div class="absolute right-6 bottom-6 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-xs text-white">7
                min
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12 hidden lg:block h-96 rounded-3xl overflow-hidden relative">
            <div class=" flex w-full h-full">
              <img class="object-cover w-full h-full" src="src/assets/images/image3.svg" alt="Imagem">
              <div class="absolute inset-0 bg-menu-icon opacity-50 dark:bg-black "></div>

            </div>
            <div class="z-10 absolute top-0 p-6 w-full bottom-0 md:ml-4">
              <h3 class="text-3xl max-w-xs font-semibold">Skateboard Tips You need to know</h3>
              <div class="container flex justify-start items-center mt-14">
                <div>
                  <h3 class="font-medium">Tony Andrew</h3>
                  <div class="flex  gap-2 text-sm">
                    <p>53k views</p> <span class="flex justify-start items-center">•</span>
                    <p>2 weeks</p>
                  </div>
                  <div class="w-16 h-20 rounded-full overflow-hidden mt-1">
                    <img class="object-none w-full h-full  " src="src/assets/images/TonyAndrew.svg" alt="TonyAndrew">
                  </div>
                </div>
              </div>
              <div class="absolute right-6 bottom-6 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-xs text-white">7
                min
              </div>
            </div>
          </div>
        </div>
        <h2 class=" text-2xl mt-12 mb-4 lg:font-normal md:font-medium font-bold">Most Watched</h2>
        <div class=" pb-9 md:pb-4 ">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 gap-4 ">
            <CardItem v-for="item  of 1 " :key="item.id" />
          </div>
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