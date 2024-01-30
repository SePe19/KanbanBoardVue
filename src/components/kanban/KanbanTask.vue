<template>
    <div class="task">
        {{ task.title }}
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Task } from '@/components/kanban/types';

const props = defineProps<{
    task: Task;
}>();

// const props = defineProps({
//     task: {
//         type: Object as PropType<Task>,
//         required: true
//     }
// });
</script>

<style scoped>
.task {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    margin-bottom: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: grab;
    color: #333;
}

.task:hover {
    background-color: #f0f0f0;
}
</style>
