<template>
  <div class="bg-gray-800 px-12 flex text-white max-h-screen h-screen ">
    <div class=" w-64">
      <span class="font-semibold p-6 block opacity-90">Skateboard</span>
      <nav class="p-6">
        <h3 class="opacity-50 uppercase text-xs font-semibold -tracking-wider mb-6">Menu</h3>
        <div class="space-y-6">
          <MenuItem :icon="HomeIcon">Dicover</MenuItem>
          <MenuItem :icon="TrendingUpIcon">Trending </MenuItem>
          <MenuItem :icon="TrendingUpIcon">Trending </MenuItem>
          <MenuItem :icon="TrendingUpIcon">Trending </MenuItem>
          <MenuItem :icon="TrendingUpIcon">Trending </MenuItem>


        </div>
      </nav>
    </div>
    <div class=" p-5 flex-1">
      <header>
        <InputSearch />
<div class="flex items-center space-x-3">
       <!--  <Dropdown> -->
          <Avatar />
          <span>Thomas</span>
          <ChevronDownIcon class="w-4 h-4"/>
        <!-- </Dropdown> -->
      </div>

        <!-- <Notifications/> --> 

      </header>
    </div>
  </div>
</template>

<script setup>

import MenuItem from './navs/MenuItem.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';
import TrendingUpIcon from '../components/icons/TrendingUpIcon.vue';
import InputSearch from '../components/inputs/inputSearch.vue'

</script>