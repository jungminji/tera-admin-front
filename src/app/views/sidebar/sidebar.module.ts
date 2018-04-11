import { NgModule } from '@angular/core';
import { SidebarComponent } from './container/sidebar.container';
import { BrandComponent } from './components/brand/brand.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      SidebarComponent,
      BrandComponent,
      NavItemComponent,
      NavListComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent],
  providers: [],
})

export class SidebarModule { }
