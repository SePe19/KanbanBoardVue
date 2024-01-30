<template>
    <div class="kanban-container">
        <h1 class="kanban-title">Exercises</h1>
        <div class="kanban-board">
            <KanbanColumn v-for="(column, index) in columns" :key="index" :column="column" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import KanbanColumn from '@/components/kanban/KanbanColumn.vue';
import { Column } from '@/components/kanban/types';

const columns = reactive<Column[]>([
    {
        id: 1,
        title: 'To Do',
        tasks: [
            { id: 1, title: 'Task 1' },
            { id: 2, title: 'Task 2' },
            { id: 3, title: 'Task 3' }
        ]
    },
    {
        id: 2,
        title: 'In Progress',
        tasks: [
            { id: 4, title: 'Task 4' },
            { id: 5, title: 'Task 5' },
            { id: 6, title: 'Task 6' }
        ]
    },
    {
        id: 3,
        title: 'Done',
        tasks: [
            { id: 7, title: 'Task 7' },
            { id: 8, title: 'Task 8' },
            { id: 9, title: 'Task 9' },
            { id: 10, title: 'Task 10' }
        ]
    }
]);

</script>

<style scoped>
.kanban-board {
    display: flex;
    justify-content: space-around;
    padding: 8px;
    border-radius: 8px;
}

.kanban-container {
    background-color: #e5e5e5;
    padding: 16px;
}

.kanban-title {
    color: black;
    padding: 16px;
    text-align: center;
    font-weight: bolder;
}
</style>
