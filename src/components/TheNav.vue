<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
import { isPageValid } from '@/validators'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})
// const emit = defineEmits(['navigate'])
// Тут засовываем валидацию как просто метод
// Возращает true/false соотвественно по тому что вкладываем в emit -> page
const emit = defineEmits({
  navigate: isPageValid
})
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        @click="emit('navigate', page)"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
      >
        <component :is="icon" class="w-6 h-6" />{{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
