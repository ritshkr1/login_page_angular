import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{
  path:'sign-up', component: SignupComponent},{
  path:'log-in', component:LoginPageComponent
},{
  path:'**', redirectTo:'log-in',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
