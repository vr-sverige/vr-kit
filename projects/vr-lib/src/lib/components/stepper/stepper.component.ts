import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Step {
  displayName: string;
  active: boolean;
}

@Component({
  selector: 'vr-kit-stepper',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})

export class VrKitStepperComponent {
 @Input() items: Step[] = [];

  isLast(item: Step): boolean {
    return this.items.indexOf(item) === this.items.length - 1;
  }
}
