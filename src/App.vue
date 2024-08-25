<script setup>
import { ref } from 'vue'
// import TheBook from './components/TheBook.vue';
import TheHeader from './components/TheHeader.vue';
import TheNav from './components/TheNav.vue';
import TheActivities from './components/TheActivities.vue';
import TheTimeLine from './components/TheTimeLine.vue';
import TheProgress from './components/TheProgress.vue';
import {normalizePageHash, generateTimeLineItems} from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
 
// рефнутое значение которое можем менять
const currentPage = ref(normalizePageHash())
const timelineItems = generateTimeLineItems();
const activities = ['Coding', 'Reading', 'Training']

function goTo(page){
  currentPage.value = page;
}
</script>
<template>
  <!-- Событие через эмиты -->
  <!-- <TheBook @navigate="goTo($event)"></TheBook> -->
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
    <TheActivities :activities="activities" v-show="currentPage === PAGE_ACTIVITIES"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)"/>
</template>
