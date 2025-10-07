import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface IBreadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'vr-kit-breadcrumb',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  standalone: true,
  styleUrls: ['./breadcrumb.component.scss'],
})
export class VrKitBreadcrumbComponent {
  @Input() list: IBreadcrumb[] = [];
  @Output() onClick = new EventEmitter<IBreadcrumb>();

  isActive(breadcrumb: IBreadcrumb): boolean {
    return window.location.pathname === breadcrumb.url;
  }
}
