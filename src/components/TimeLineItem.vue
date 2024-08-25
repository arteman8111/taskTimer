<!-- Если передавать в тэг :class массив то он просто его соберет в строку -->
<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid, validateSelectOptions } from '../validators'
import { ref } from 'vue'
import TimeLineApp from './TimeLineApp.vue';


// const props = defineProps({['timelineItem']})
defineProps({
  timelineItem: {
    required: true, // Указываем что обязательно для вкладывания
    type: Object, // Указываем тип данных
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions 
  }
})

const selectedActivityId = ref(0)
</script>
<!-- Всю хуйню из дочерних он передает в родитель $event, там мы сравниваем -->
<!-- Можно передавать сколько угодно значений -->
<template>
  <div>
    <div class="mt-7">
      <ul>
        <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
          <!-- Компонент с отображением времененной шкалы -->
          <TimeLineApp :hour="timelineItem.hour"/>
          <BaseSelect
            :selected="selectedActivityId"
            :options="activitySelectOptions"
            :placeholder="'Rest'"
            @select="selectedActivityId = $event"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
