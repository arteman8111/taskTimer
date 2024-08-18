<script setup>
// Import all components in App.vue which mount in main.js
// TheComponent prefix The mean that this components was using one times;
import { ref } from 'vue'
import {normalizePageHash, generateTimeLineItems} from './functions'
import TheHeader from './components/TheHeader.vue';
import TheNav from './components/TheNav.vue';
import TheActivities from './components/TheActivities.vue';
import TheTimeLine from './components/TheTimeLine.vue';
import TheProgress from './components/TheProgress.vue';

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
// 
// Делаем переменную реактивной для ее изменения при разных событиях on
// v-on: or @ for DOM event3
// Запоминаем хэш браузера для сохранения состояния в рефах
// function normalizePageHash() {
//   const hash = window.location.hash.slice(1)

//   if ([PAGE_ACTIVITIES,PAGE_PROGRESS,PAGE_TIMELINE].includes(hash)) {
//     return hash
//   } else {
//     window.location.hash = PAGE_TIMELINE
//   }
//   return PAGE_TIMELINE
// }

// ref the value for update variable
const currentPage = ref(normalizePageHash())

const timelineItems = generateTimeLineItems();
// timelineItems = 123;

function goTo(page){
  currentPage.value = page;
}
</script>

<template>
  <!-- 
    v-show директива будет display:none те элементы которые (false)
    пропсы можно передавать с bind как в камеле так и в обычном через тире
    главное помнить что капс заменяется на B -> -b
  -->
  <TheHeader 
    @go-to-progress="goTo(PAGE_PROGRESS)" 
    @go-to-timeline="goTo(PAGE_TIMELINE)"
  />
  
  <main class="flex flex-col flex-grow">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>
  <!-- v-bind:props="props" go from <Parent/> to <Child>
    Чтобы передать props в дочерний элемент нужно прописать -> :props-element="props",
    где "props" это value которое передаем и дальше используем. В дочерке нужно прописить след:
    defineProps(['currentPage'])
    Кастомные атрибуты которые передаем приянто называть пропсами, далее логика выше описана
  -->
   <!-- 
    Логика следущая: Передаем из дочернего элемента конструкцию @click = emit('navigate', prop) после чего тут прописываем
    тело событию -> @navigate = "expression" -> "currentPage = $event", где $event = prop которому мы передали через дочерку
    В дочерке нужно прописать след: 
    const emit = defineEmits(['navigate'])
    -->
  <TheNav :current-page="currentPage" @navigate="goTo($event)"/>
</template>
