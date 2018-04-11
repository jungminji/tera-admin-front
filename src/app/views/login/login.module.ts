import { NgModule } from '@angular/core';
import { LoginRouteModule } from './login-route.module';
import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRouteModule],
  providers: [],
})

export class LoginModule { }
