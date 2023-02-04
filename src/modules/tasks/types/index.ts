export interface AddTask {
    name: string;
    completed: string | null; // date
    scheduled: string | null; // date
    archived: boolean;
}

export interface Task extends AddTask {
    id: string;
}

export type UpdateTask = Partial<AddTask>;
