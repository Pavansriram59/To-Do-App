import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard/lists', component: DashboardComponent },
  { path: 'dashboard/lists/:listId/tasks', component: DashboardComponent },
  { path: 'dashboard/lists/:listId/tasks/:taskId', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, DashboardComponent];

