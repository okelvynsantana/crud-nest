import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {id: 1, description: 'Tarefa 1', completed: false},
    {id: 2, description: 'Tarefa 2', completed: true},
  ];

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: number): Task{
    const task = this.tasks.find((task) => task.id == id);
    return task
  }

  create(task: Task): Task {
    let lastId = 0;

    if(this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task

  }
  update(task: Task): Task {
    const taskArray = this.getById(task.id);

    if(taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray  ;
  }

  delete(id: number): void {
    const index = this.tasks.findIndex((task) => task.id == id);

    this.tasks.splice(index, 1);
  }


}
