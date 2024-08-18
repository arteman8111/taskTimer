<!-- Если передавать в тэг :class массив то он просто его соберет в строку -->
<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid } from '../validators'
import { ref } from 'vue'

// const props = defineProps({['timelineItem']})
const props = defineProps({
  timelineItem: {
    required: true, // Указываем что обязательно для вкладывания
    type: Object, // Указываем тип данных
    validator: isTimelineItemValid
  }
})

const hourLinkClasses = [
  '-translate-x-1/2 absolute -top-4 left-1/2 rounded bg-gray-100 px-2 font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectedActivityId = ref(1)
</script>
<!-- Всю хуйню из дочерних он передает в родитель $event, там мы сравниваем -->
<!-- Можно передавать сколько угодно значений -->
<template>
  <div>
    <div class="mt-7">
      <ul>
        <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
          <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
          <BaseSelect
            :selected="selectedActivityId"
            :options="options"
            :placeholder="'Rest'"
            @select="selectedActivityId = $event"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
