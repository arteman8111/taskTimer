<template>
    <div>
        <a href="#" :class="classes">{{ formattedHour }}</a>
    </div>
</template>

<script setup>
import { isHourValid } from '@/validators';

const props = defineProps({
  hour: {
      required: true, // Указываем что обязательно для вкладывания
      type: Number, // Указываем тип данных
      validator: isHourValid
  }
})

const formattedHour = `${props.hour.toString().padStart(2,0)}:00`;

const classes = [
  '-translate-x-1/2 absolute -top-4 left-1/2 rounded bg-gray-100 px-2 font-mono text-lg',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]
</script>

<style lang="scss" scoped>

</style>