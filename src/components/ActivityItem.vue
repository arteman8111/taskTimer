<template>
  <div>
    <li class="flex flex-col gap-2 p-4">
      <div class="flex items-center gap-2">
        <BaseButton>
          <TrashIcon class="h-8"></TrashIcon>
        </BaseButton>
        <span class="truncate text-xl">{{ activity }}</span>
      </div>
      <div>
        <BaseSelect
          :selected="secondsToComplete"
          :options="periodSelectOptions"
          @select="secondsToComplete = $event"
          @bbb="secondsToComplete = $event"
          class="font-mono"
          placeholder="h:mm"
        />
      </div>
    </li>
  </div>
</template>
<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'

defineProps({
  activity: {
    required: true,
    type: String
  }
})

const periodSelectOptions = [
  {
    value: 15,
    label: '0:15'
  },
  {
    value: 30,
    label: '0:30'
  },
  {
    value: 45,
    label: '0:45'
  }
]

const secondsToComplete = ref(0)
</script>
