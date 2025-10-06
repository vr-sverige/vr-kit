import { Injectable } from '@angular/core';

export const DAY_THEME = 'theme-day';
export const NIGHT_THEME = 'theme-night';
export const VR_THEME = 'vr-theme';

export const THEME_KEY = 'current_theme';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	public isThemeNight() {
		return localStorage.getItem(THEME_KEY) === NIGHT_THEME;
	}
	public setTheme(isDayTheme: boolean) {
		const theme = isDayTheme ? DAY_THEME : NIGHT_THEME;
		localStorage.setItem(THEME_KEY, theme);
		document.body.className = `${theme} ${VR_THEME}`;
	}
}
