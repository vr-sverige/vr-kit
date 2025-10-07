import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'vr-kit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [CommonModule],
})
export class VrKitArticleComponent {
  @Input() display: 'sheet' | 'white' | 'transparent' = 'sheet';
  @Input() title: string = '';
}
