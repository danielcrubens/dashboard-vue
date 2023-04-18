<template>
  <div class="flex items-center space-x-4">
    <div :class="[first ? 'bg-menu-icon' : isActive ? 'bg-menu-icon' : 'bg-gray-700','rounded-lg p-2']" @mouseenter="hoverActive" @mouseleave="hoverInactive">
      <component :is="icon" class="w-5 h-5"/>
    </div>
    <span :class="{'text-white': first, ' opacity-50': !first}">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps,defineExpose, ref } from 'vue';

const props = defineProps({
  icon: { default: null },
  first: { type: Boolean, default: false },
});

const isActive = ref(props.first);

function hoverActive() {
  isActive.value = true;
}

function hoverInactive() {
  isActive.value = props.first;
}

defineExpose({
  isActive,
  hoverActive,
  hoverInactive,
  props,
});

</script>
