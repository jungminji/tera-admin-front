import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRouteModule } from './dashboard-route.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRouteModule],
  providers: [],
})

export class DashboardModule { }
