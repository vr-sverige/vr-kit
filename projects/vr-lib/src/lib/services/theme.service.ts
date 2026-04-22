import { Injectable, signal } from '@angular/core';

export const DAY_THEME = 'theme-day';
export const NIGHT_THEME = 'theme-night';
export const VR_THEME = 'vr-theme';

export const THEME_KEY = 'current_theme';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	readonly currentTheme = signal<string>(DAY_THEME);

	constructor() {
		this.restoreTheme();
	}

	public isThemeNight() {
		return localStorage.getItem(THEME_KEY) === NIGHT_THEME;
	}

	public setTheme(isDayTheme: boolean) {
		const theme = isDayTheme ? DAY_THEME : NIGHT_THEME;
		this.applyTheme(theme);
	}

	public restoreTheme(): void {
		const storedTheme = localStorage.getItem(THEME_KEY);
		const theme = storedTheme === NIGHT_THEME ? NIGHT_THEME : DAY_THEME;
		this.applyTheme(theme);
	}

	private applyTheme(theme: string): void {
		localStorage.setItem(THEME_KEY, theme);
		this.currentTheme.set(theme);

		document.body.classList.remove(DAY_THEME, NIGHT_THEME, VR_THEME);
		document.body.classList.add(theme, VR_THEME);
	}
}
