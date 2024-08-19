<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import {validateSelectOptions} from '@/validators'
import { computed } from 'vue';
// const props = defineProps(['options', 'placeholder', 'selected'])
// Записываем таким образом чтобы зафиксировать передаваемый тип данных
// Пропсы будут каждый раз смотерться учитывая что есть цикл. То есть каждый раз 
// будет проверка валидатором
const props = defineProps({
    selected: {
      type: Number,
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: validateSelectOptions,
    },
    placeholder: {
      type: String,
      required: true,
      // default: 'Rest',
    }
})

const emit = defineEmits({
  select(value){
    return typeof value === 'number'
  }
})
// computed свойства, внутрь вкидывем callback, работает как обычная функия
// но с условием что это вычисляемое свойство. Автоматически будет пересчитываться
// метод при изменении его ref-свйоств. Автоматически кэшируется и обновляются данные
const isNotSelected = computed(() => {
  return props.selected === null || props.selected === undefined
});

</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
        <XMarkIcon class="h-8" />
    </BaseButton>
    <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl" @change="$emit('select', +$event.target.value)">
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
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
