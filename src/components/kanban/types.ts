export interface Task {
    id: number;
    title: string;
}

export interface Column {
    id: number;
    title: string;
    tasks: Task[];
}

export type DraggableEvent = {
    newIndex: number;
    oldIndex: number;
};
