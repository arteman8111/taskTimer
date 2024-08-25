<script setup>
import ActivityItem from './ActivityItem.vue'
import { validateActivities } from '@/validators';
defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})
</script>

<template>
  <ul class="divide-y">
    <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
  </ul>
</template>
