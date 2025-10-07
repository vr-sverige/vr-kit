import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { VrKitBreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'vr-kit-page-header',
  standalone: true,
  imports: [
    CommonModule,
    VrKitBreadcrumbComponent
  ],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class VrKitPageHeaderComponent {
  @Input() title!: string;
  @Input()
  set breadcrumbList(value: { label: string; url: string }[]) {
    this._breadcrumbList = value;
  }

  get breadcrumbList() {
    return this._breadcrumbList;
  }

  private _breadcrumbList: { label: string; url: string }[] = [];
}
