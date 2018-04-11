import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/views/login/login.module#LoginModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/views/dashboard/dashboard.module#DashboardModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {}