import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private tasks: TasksService,
    private location: Location) {}

  back() {
    this.location.back();
  }

  completeTask() {
    this.task.pending = false;
    this.tasks.updateTask(this.task);
    this.back();
  }

  deleteTask() {
    this.tasks.removeTask(this.task.id);
    this.back();
  }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.tasks.findTaskById(id);
  }

}
