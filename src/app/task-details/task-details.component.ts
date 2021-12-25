import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input()
  task: Task;
  @Output()
  private deleted = new EventEmitter();

  constructor(private router: Router) { }

  deleteTask(){
    this.deleted.emit(this.task);
  }

  completeTask(){
    this.task.pending = false;
  }

  editTask(){
    this.router.navigateByUrl(`/edit/${this.task.id}`);
  }

  ngOnInit(): void {
  }

}
