<script setup>
import ActivityItem from './ActivityItem.vue'
import { isActivityValid, validateActivities } from '@/validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})
const emit = defineEmits({
  deleteActivity: isActivityValid
})
</script>

<template>
  <ul class="divide-y">
    <ActivityItem
      v-for="activity in activities"
      :key="activity"
      :activity="activity"
      @delete="emit('deleteActivity', activity)"
    />
  </ul>
</template>
