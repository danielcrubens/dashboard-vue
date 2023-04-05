<template>
  <div  class=" flex items-center space-x-4">
            <div class="bg-orange-500 rounded-lg p-2">
              <component :is="icon" class="w-4 h-4" />
            </div>
            <span>
              <slot></slot>
            </span>
          </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  icon: {default: null}
});
</script>