import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../task.service';
import List from '../models/list';
import Task from '../models/task';
import { items } from './dashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  lists: List[] = [];
  tasks: Task[] = [];
  listId: string = "";

  dashboardItems: items[] = [
    {
      icon: "fa-regular fa-sun",
      name: "Daily",
    },
    {
      icon: "fa-solid fa-house",
      name: "Tasks"
    },
    {
      icon: "fa-regular fa-star",
      name: "Important",
    }
  ]

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { };

  ngOnInit(): void {
    this.taskService.getLists()
      .subscribe((lists: any) => this.lists = lists);

    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
      if (!this.listId) return;
      this.taskService.getTasks(this.listId).subscribe((tasks: any) => this.tasks = tasks);
    })
  }

  onTaskClick(task: any) {
    this.taskService.setCompleted(this.listId, task).subscribe(
      () => task.completed = !task.completed
    );
  }
}
