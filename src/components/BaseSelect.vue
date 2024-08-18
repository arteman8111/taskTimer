<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

// const props = defineProps(['options', 'placeholder', 'selected'])
// Записываем таким образом чтобы зафиксировать передаваемый тип данных
defineProps({
    selected: Number,
    options: {
      required: true,
      type: Array,
      validator(options) {
        return options.every(({value, label}) => typeof value === 'number' && typeof label === 'string')
      }
    },
    placeholder: {
      // default: 'Rest',
      required: true,
      type: String
    }
})

</script>
<template>
  <div class="flex gap-2">
    <BaseButton>
        <XMarkIcon class="h-8" />
    </BaseButton>
    <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
      <option selected disabled value="">{{ placeholder }}</option>
      <!-- Деструктуирования массива forin через {a,b} = [{},{}] -->
      <!-- в v-bind можно вставлять экспресс выражения к примеру if() -->
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
