<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import {isActivityValid, isUndefined} from '@/validators'
import { PERIOD_SELECT_OPTIONS } from '@/constants'
import { BUTTON_TYPE_DANGER } from '@/constants'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  delete: isUndefined
})

const secondsToComplete = ref()
</script>

<template>
    <div>
      <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
          <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
            <TrashIcon class="h-8"></TrashIcon>
          </BaseButton>
          <span class="truncate text-xl">{{ activity }}</span>
        </div>
        <div>
          <BaseSelect
            :selected="secondsToComplete"
            :options="PERIOD_SELECT_OPTIONS"
            @select="secondsToComplete = $event"
            class="font-mono"
            placeholder="h:mm"
          />
        </div>
      </li>
    </div>
  </template>