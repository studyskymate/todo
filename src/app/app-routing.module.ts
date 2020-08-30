import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { JobslistComponent } from './jobslist/jobslist.component';

//create route to welcome
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'#myCarousel',component:WelcomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'todos',component:ListTodoComponent,canActivate:[RouteGuardService]},
  {path:'tutorials',component:TutorialsComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'todo/:id',component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'todo/:id/:username',component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'profile',component:UseraccountComponent,canActivate:[RouteGuardService]},
  {path:'jobslist',component:JobslistComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
