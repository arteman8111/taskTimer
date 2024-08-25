<script setup>
import TimeLineItem from './TimeLineItem.vue'
import { validateSelectOptions, validateTimelineItems } from '@/validators';

defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator: validateTimelineItems
    },
    activitySelectOptions: {
      required: true,
      type: Array,
      validator: validateSelectOptions
    }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimeLineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>
