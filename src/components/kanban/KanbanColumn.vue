<template>
    <div class="kanban-column">
        <h2 class="column-title">{{ column.title }}</h2>
        <draggable class="drag-area" :list="column.tasks" group="tasks" @end="onUpdateTask">
            <template v-slot:item="{ element }">
                <KanbanTask :task="element" />
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import draggable from 'vuedraggable';
import KanbanTask from '@/components/kanban/KanbanTask.vue';
import { Column, DraggableEvent } from '@/components/kanban/types';

const props = defineProps({
    column: {
        type: Object as PropType<Column>,
        required: true
    }
});

const emit = defineEmits(['update-tasks']);

const onUpdateTask = (event: DraggableEvent) => {
    emit('update-tasks', { columnId: props.column.id, event });
};
</script>

<style scoped>
.kanban-column {
    flex: 1;
    margin: 10px;
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 20vw;
    min-height: 60vh;
}

.column-title {
    margin-bottom: 12px;
    color: #333;
    font-weight: bold;
}

.drag-area {
    min-height: 50vh;
}
</style>
