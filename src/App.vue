<script setup>
import { ref } from 'vue'
// import TheBook from './components/TheBook.vue';
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './components/TheActivities.vue'
import TheTimeLine from './components/TheTimeLine.vue'
import TheProgress from './components/TheProgress.vue'
import {
  normalizePageHash,
  generateTimeLineItems,
  generateActivitySelectOptions
} from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

// рефнутое значение которое можем менять
const currentPage = ref(normalizePageHash())
const timelineItems = generateTimeLineItems()
const activities = ref(['Coding', 'Reading', 'Training'])
const activitySelectOptions = generateActivitySelectOptions(activities.value)
// console.log(activitySelectOptions);

function goTo(page) {
  currentPage.value = page
}
function deleteActivity(activity){
  activities.value.splice(activities.value.indexOf(activity), 1)
}
function createActivity(activity){
  activities.value.push(activity);
}
</script>
<template>
  <!-- Событие через эмиты -->
  <!-- <TheBook @navigate="goTo($event)"></TheBook> -->
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimeLine
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      :activities="activities"
      v-show="currentPage === PAGE_ACTIVITIES"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
      />
      <!-- Тоже самое что и ---] @delete-activity="deleteActivity($event)" -->
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
