<template>
  <div class="flex items-center space-x-4">
    <div :class="[first ? 'bg-orange-500' : isActive ? 'bg-orange-500' : 'bg-gray-700','rounded-lg p-2']" @mouseenter="hoverActive" @mouseleave="hoverInactive">
      <component :is="icon" class="w-4 h-4" />
    </div>
    <span>
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
