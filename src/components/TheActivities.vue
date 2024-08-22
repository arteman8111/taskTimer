<template>
  <ul class="divide-y">
    <ActivityItem v-for="activity in activities" :key="activity" :activity="activity"/>
  </ul>
</template>

<script setup>
import ActivityItem from './ActivityItem.vue';
const activities = ['Coding', 'Reading', 'Training']
</script>

<style lang="scss" scoped></style>
