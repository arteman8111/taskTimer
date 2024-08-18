<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants';
import { isPageValid } from '@/validators';

// Опрокидывем пропсы с родителя
// По хорошему все идет снизу вверх, поэтому эмитим
defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

// Эмитим для опрокидывания вверх до родителя через событие
const emit = defineEmits(['navigate'])

</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <!-- v-for (value,key) in obj
       Тут передается событие @click с констуркцией эмита для опрокидывания наверх, стучимся
       вверх со своими пропсами.
       :key для привязки в виртуальном DOM компонентам ключей
       :href передается атрибут в NavItem, после чего считывается там как v-bind="$attrs"
       :class присвоим класс при выполнении условия. Класс присвоится первой оболочке компонента.
      -->
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        @click="emit('navigate', page)"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
      >
      <!-- {expression:boolean} -> return expression(true) or ''(false) -->
        <component :is="icon" class="w-6 h-6" />{{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
