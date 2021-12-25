import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title: string;
  constructor(private location: Location, private tasks: TasksService) { }

  back() {
    this.location.back();
  }

  addTask() {
    this.tasks.addTask({title: this.title, pending: true});
    this.back();
  }

  ngOnInit(): void {
  }

}
