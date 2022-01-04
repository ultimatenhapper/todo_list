import { Injectable, OnInit } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit{
  private id = 0;
  private tasks: Task[] = [];

  constructor() {}

  ngOnInit() {
    if (localStorage.getItem('id'))
      this.id = Number(localStorage.getItem('id'));
    if (localStorage.getItem('tasks'))
      this.tasks = JSON.parse(localStorage.getItem('tasks'));

  }

  findAllTasks(): Task[] {
    return this.tasks;
  }

  findTaskById(id: number): Task {
    let index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1)return this.tasks[index];
    else return null;
  }

  addTask(t: Task): void {
    t.id = this.id++;
    this.tasks.push(t);
    localStorage.setItem('id', String(this.id));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTask(task: Task): void {
    let index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  removeTask(id: number) {
    let index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
