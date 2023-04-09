<template>
  <div>
    <div class="flex items-center justify-start w-full space-x-4">
      <button
        class="relative inline-flex items-center justify-center h-6 rounded-full w-11 transition-colors focus:outline-none"
        :class="{ ' dark:bg-purple-500': isDark, ' bg-gray-600 ': !isDark }" @click="toggleDark()"
        :aria-pressed="isDark">

        <span class="mr-auto inset-0 h-5 w-5 rounded-full dark:bg-white bg-orange-500 shadow transition "
          :class="{ 'translate-x-full': !isDark }">
        </span>
      </button>
      <span class="dark:text-white text-gary-600 space-x-7">
        {{ isDark ? "Dark" : "Light " }} Mode
      </span>
    </div>
  </div>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script> 
