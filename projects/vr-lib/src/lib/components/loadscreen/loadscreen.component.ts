import { Component, inject } from '@angular/core';
import { ThemeService, NIGHT_THEME } from '../../services/theme.service';

@Component({
  selector: 'vr-kit-loadscreen',
  standalone: true,
  templateUrl: './loadscreen.component.html',
  styleUrls: ['./loadscreen.component.scss'],
})
export class VrKitLoadscreenComponent {
  private themeService = inject(ThemeService);

  gifPath() {
    return this.themeService.currentTheme() === NIGHT_THEME
      ? '/assets/icons/moving_train_night.gif'
      : '/assets/icons/moving_train_day.gif';
  }
}
