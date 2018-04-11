import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
    @Input() name: string;
    @Input() to: string;
}
