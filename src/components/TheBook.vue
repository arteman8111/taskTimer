<script setup>
import { isPageValid } from '@/validators';
import {PAGE_ANOTHER} from '@/constants'

const emit = defineEmits({
    navigate: isPageValid
})
</script>
<template>
    <a @click="emit('navigate', PAGE_ANOTHER)" :href="`#${PAGE_ANOTHER}`">
        another-page
    </a>
</template>