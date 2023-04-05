<template>
  <div class="bg-gray-800 flex text-white max-h-screen h-screen ">
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
    <div class="border-2 flex-1 border-red-500">Content</div>
  </div>
</template>

<script setup>

import MenuItem from './navs/MenuItem.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';
import TrendingUpIcon from '../components/icons/TrendingUpIcon.vue';


/* export default {
  components:{
    MenuItem,
    TrendingUpIcon,
    HomeIcon,    
  },
  data() {
    return {
      menuItems: [
        { name: "Home", icon: HomeIcon },
        { name: "Trending", icon: TrendingUpIcon },
        // Add more menu items here...
      ]
    }
  },
  } */

</script>