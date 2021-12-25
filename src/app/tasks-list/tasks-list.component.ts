import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  constructor(public tasks: TasksService, private router: Router) {}

  deleteTask(task) {
    this.tasks.removeTask(task.id);
  }

  addTask() {
    this.router.navigateByUrl('/add');
  }

  ngOnInit(): void {
  }

}
