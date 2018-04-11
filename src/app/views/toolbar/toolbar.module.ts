import { NgModule } from '@angular/core';
import { ToolbarContainerComponent } from './containers/toolbar.container';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
      ToolbarContainerComponent,
      NavComponent
    ],
  imports: [],
  exports: [ToolbarContainerComponent],
  providers: [],
})

export class ToolbarModule { }
