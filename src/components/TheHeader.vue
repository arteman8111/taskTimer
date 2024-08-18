<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
import { isPageValid } from '@/validators'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';

// Прослушиваем 2 события, связанного через эмит
// const emit = defineEmits(['goToTimeline', 'goToProgress'])
const emit = defineEmits({
  navigate: isPageValid
})
</script>
<template>
  <!-- Учитывая что TheLogo имеет корневой элемент то суем на него
      событие 
  -->
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
