<script setup>
import { PAGE_TIMELINE } from '../constants';
</script>
<template>
  <!-- 
  Используем v-bind для вставки значений в атрибуты
  -->
  <a :href="`#${PAGE_TIMELINE}`">
    <img src="../assets/logo.png" alt="Логотип" class="h-9" />
  </a>
</template>
