import { NgModule } from '@angular/core';
import { SidebarComponent } from './container/sidebar.container';
import { BrandComponent } from './components/brand/brand.component';

@NgModule({
  declarations: [
      SidebarComponent,
      BrandComponent
    ],
  imports: [],
  exports: [SidebarComponent],
  providers: [],
})

export class SidebarModule { }
