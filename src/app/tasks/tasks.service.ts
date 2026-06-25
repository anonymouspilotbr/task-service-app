import { Injectable } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = [];

    allTasks(): Task[] {
        return this.tasks;
    }

    addTask(taskData: { title: string; description: string }) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.push(newTask);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks = this.tasks.map(task =>
            task.id === taskId ? {...task, status: newStatus} : task
        );
    }
}