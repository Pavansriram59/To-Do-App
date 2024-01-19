import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import Task from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebApiService) { }

  public getLists() {
    return this.webService.get("lists");
  }

  public createList(title: string) {
    return this.webService.post("lists", { title });
  }

  public getTasks(listId: string) {
    return this.webService.get(`lists/${listId}/tasks`);
  }
  public createTask(listId: string, title: string) {
    return this.webService.post(`lists/${listId}/tasks`, { title });
  }

  public deleteList(listId: string) {
    return this.webService.delete(`lists/${listId}`)
  }

  public deleteTask(listId: string, taskId: string) {
    return this.webService.delete(`lists/${listId}/tasks/${taskId}`)
  }

  public setCompleted(listId: string, task: Task) {
    return this.webService.patch(`lists/${listId}/tasks/${task._id}`, { completed: !task.completed });
  }
}
