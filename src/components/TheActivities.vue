<script setup>
import ActivityItem from './ActivityItem.vue'
import TheActivityForm from './TheActivityForm.vue'
import { isActivityValid, validateActivities } from '@/validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})
const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
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
  <TheActivityForm @submit="emit('createActivity', $event)"/>
</template>
