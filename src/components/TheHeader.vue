<script setup>
import TheLogo from './TheLogo.vue';
import TheHeaderProgress from './TheHeaderProgress.vue';

const emit = defineEmits(['goToTimeline', 'goToProgress'])
</script>
<template>
  <!-- Учитывая что TheLogo имеет корневой элемент то суем на него
      событие 
  -->
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo @click="emit('goToTimeline')"/>
    <TheHeaderProgress @click="emit('goToProgress')"/>
  </header>
</template>
