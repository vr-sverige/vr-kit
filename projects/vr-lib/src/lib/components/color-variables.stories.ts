import { Component } from '@angular/core';
import { componentWrapperDecorator } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

const baseColors = [
	'--awesome-loader-day',
	'--background',
	'--error',
	'--icon',
	'--info',
	'--marketingblue',
	'--marketingpink',
	'--marketingviolet',
	'--marketingyellow',
	'--primary-light',
	'--primary-dark',
	'--warning',
	'--transparent',
	'--black',
	'--blue10',
	'--blue20',
	'--blue30',
	'--blue40',
	'--green00',
	'--green05',
	'--green10',
	'--green20',
	'--green30',
	'--green40',
	'--green45',
	'--green50',
	'--green60',
	'--grey20',
	'--grey30',
	'--grey35',
	'--grey40',
	'--grey50',
	'--grey60',
	'--grey70',
	'--grey80',
	'--orange10',
	'--orange20',
	'--orange30',
	'--orange40',
	'--orange50',
	'--pink10',
	'--pink20',
	'--pink30',
	'--pink40',
	'--pink60',
	'--red10',
	'--red20',
	'--red30',
	'--red40',
	'--violet00',
	'--violet10',
	'--violet20',
	'--violet30',
	'--violet40',
	'--violet70',
	'--violet80',
	'--white',
];

const themeVariables = [
	'--awesomeloaderday-white',
	'--background-grey20',
	'--background-grey30',
	'--info-info',
	'--primary-green60',
	'--primarydark-green40',
	'--primarylight-grey30',
	'--primarylight-green30',
	'--primarylight-green45',
	'--primarylight-green50',
	'--primarylight-primarydark',
	'--primarylight-white',
	'--marketingyellow-orange40',
	'--marketingyellow-grey20',
	'--black-black',
	'--black-white',
	'--black-marketingyellow',
	'--blue10-orange20',
	'--blue30-blue30',
	'--blue40-blue10',
	'--green05-primarydark',
	'--green05-green05',
	'--green10-green20',
	'--green10-green30',
	'--green40-green05',
	'--green40-green20',
	'--green40-green45',
	'--green50-transparent',
	'--green50-green00',
	'--green50-green05',
	'--green50-green20',
	'--green60-primarylight',
	'--green60-transparent',
	'--green60-green00',
	'--green60-green05',
	'--green60-green40',
	'--green60-green60',
	'--grey20-white',
	'--grey20-green20',
	'--grey20-green45',
	'--grey20-grey20',
	'--grey20-grey80',
	'--grey20-green60',
	'--grey20-primarydark',
	'--grey20-orange20',
	'--grey30-white',
	'--grey30-grey60',
	'--grey35-grey20',
	'--grey35-grey50',
	'--grey35-grey60',
	'--grey35-grey80',
	'--grey35-green40',
	'--grey35-green45',
	'--grey35-green50',
	'--grey35-green60',
	'--grey35-violet80',
	'--grey35-white',
	'--grey40-green10',
	'--grey40-green30',
	'--grey40-green40',
	'--grey40-green45',
	'--grey40-green50',
	'--grey40-grey40',
	'--grey40-grey50',
	'--grey40-grey60',
	'--grey40-grey70',
	'--grey40-violet70',
	'--grey40-violet80',
	'--grey50-primarydark',
	'--grey50-white',
	'--grey50-grey20',
	'--grey50-grey30',
	'--grey50-grey40',
	'--grey50-grey50',
	'--grey50-grey60',
	'--grey60-green40',
	'--grey60-green45',
	'--grey60-grey40',
	'--grey60-grey50',
	'--grey60-grey60',
	'--grey60-violet40',
	'--grey60-white',
	'--grey70-grey30',
	'--grey70-grey35',
	'--grey70-grey40',
	'--grey70-grey70',
	'--grey80-grey20',
	'--grey80-grey30',
	'--grey80-grey35',
	'--grey80-grey40',
	'--grey80-grey50',
	'--grey80-white',
	'--orange10-orange30',
	'--orange10-orange20',
	'--orange10-grey20',
	'--orange20-blue10',
	'--pink10-pink10',
	'--pink20-violet40',
	'--pink30-violet20',
	'--pink30-violet30',
	'--pink40-violet00',
	'--pink40-violet10',
	'--pink60-violet10',
	'--pink60-violet20',
	'--red10-red20',
	'--red10-red30',
	'--red10-red40',
	'--red20-red30',
	'--violet20-violet40',
	'--violet30-violet20',
	'--violet70-violet00',
	'--violet70-violet10',
	'--violet80-violet00',
	'--violet80-violet10',
	'--white-black',
	'--white-primarylight',
	'--white-white',
	'--white-grey20',
	'--white-grey30',
	'--white-grey40',
	'--white-grey60',
	'--white-green10',
	'--white-green20',
];

@Component({
	selector: 'color-swatch',
	standalone: true,
	template: ``,
})
class ColorSwatchComponent {}

const swatchStyle = `
	.color-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; padding: 20px; }
	.color-swatch { border-radius: 8px; overflow: hidden; border: 1px solid #ddd; }
	.color-swatch__preview { height: 48px; }
	.color-swatch__info { padding: 8px; font-family: monospace; font-size: 11px; background: #fff; }
	.theme-night .color-swatch__info { background: #333; color: #fff; }
	.color-swatch__name { font-weight: bold; margin-bottom: 4px; word-break: break-all; }
	.color-swatch__value { color: #666; }
	.theme-night .color-swatch__value { color: #aaa; }
	h2 { padding: 20px 20px 0; font-family: sans-serif; }
`;

function rgbToHex(rgb: string): string {
	const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
	if (!match) return rgb;
	const r = parseInt(match[1], 10);
	const g = parseInt(match[2], 10);
	const b = parseInt(match[3], 10);
	return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('');
}

function buildSwatches(vars: string[]): string {
	const swatches = vars
		.map(
			(v) => `
		<div class="color-swatch">
			<div class="color-swatch__preview" style="background-color: var(${v});"></div>
			<div class="color-swatch__info">
				<div class="color-swatch__name">${v}</div>
				<div class="color-swatch__value" data-var="${v}"></div>
			</div>
		</div>`
		)
		.join('');

	const script = `
		<script>
			requestAnimationFrame(() => {
				document.querySelectorAll('[data-var]').forEach(el => {
					const varName = el.getAttribute('data-var');
					const wrapper = el.closest('.vr-theme') || el.closest('[class*="theme"]');
					if (!wrapper) return;
					const val = getComputedStyle(wrapper).getPropertyValue(varName).trim();
					if (!val || el.textContent) return;
					const temp = document.createElement('div');
					temp.style.color = val;
					document.body.appendChild(temp);
					const rgb = getComputedStyle(temp).color;
					document.body.removeChild(temp);
					const match = rgb.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
					if (match) {
						const hex = '#' + [match[1], match[2], match[3]].map(c => parseInt(c,10).toString(16).padStart(2,'0')).join('');
						el.textContent = hex;
					} else {
						el.textContent = val;
					}
				});
			});
		<\/script>`;

	return swatches + script;
}

const meta: Meta<ColorSwatchComponent> = {
	title: 'Design Tokens/Color Variables',
	component: ColorSwatchComponent,
};

export default meta;
type Story = StoryObj<ColorSwatchComponent>;

export const BaseColors_Day: Story = {
	decorators: [
		componentWrapperDecorator(
			() =>
				`<div id="storywrapper" class="vr-theme theme-day">
					<style>${swatchStyle}</style>
					<h2>Base Colors (Day)</h2>
					<div class="color-grid">${buildSwatches(baseColors)}</div>
				</div>`
		),
	],
};

export const BaseColors_Night: Story = {
	decorators: [
		componentWrapperDecorator(
			() =>
				`<div id="storywrapper" class="vr-theme theme-night" style="background-color: #404040;">
					<style>${swatchStyle}</style>
					<h2>Base Colors (Night)</h2>
					<div class="color-grid">${buildSwatches(baseColors)}</div>
				</div>`
		),
	],
};

export const ThemeVariables_Day: Story = {
	decorators: [
		componentWrapperDecorator(
			() =>
				`<div id="storywrapper" class="vr-theme theme-day">
					<style>${swatchStyle}</style>
					<h2>Theme Variables (Day)</h2>
					<div class="color-grid">${buildSwatches(themeVariables)}</div>
				</div>`
		),
	],
};

export const ThemeVariables_Night: Story = {
	decorators: [
		componentWrapperDecorator(
			() =>
				`<div id="storywrapper" class="vr-theme theme-night" style="background-color: #404040;">
					<style>${swatchStyle}</style>
					<h2>Theme Variables (Night)</h2>
					<div class="color-grid">${buildSwatches(themeVariables)}</div>
				</div>`
		),
	],
};

export const SideBySide: Story = {
	decorators: [
		componentWrapperDecorator(
			() =>
				`<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
					<div id="storywrapper" class="vr-theme theme-day" style="padding: 10px;">
						<style>${swatchStyle}</style>
						<h2>Day Theme</h2>
						<div class="color-grid">${buildSwatches(themeVariables)}</div>
					</div>
					<div class="vr-theme theme-night" style="background-color: #404040; padding: 10px;">
						<h2>Night Theme</h2>
						<div class="color-grid">${buildSwatches(themeVariables)}</div>
					</div>
				</div>`
		),
	],
};
