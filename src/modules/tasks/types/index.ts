export interface Task {
    id: string;
    name: string;
    completed?: string; // date
    scheduled?: string; // date
}

export type PartialTask = Pick<Task, 'id'> & Partial<Task>;
