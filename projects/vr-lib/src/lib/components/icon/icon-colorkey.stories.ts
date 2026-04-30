import { MatTooltipModule } from '@angular/material/tooltip';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { VrKitIconComponent } from './icon.component';
import { iconPaths } from './iconpaths';

const meta: Meta<VrKitIconComponent> = {
	title: 'Components/Icon/ColorKey',
	component: VrKitIconComponent,
	argTypes: {
		colorKey: {
			control: {
				type: 'text',
			},
		},
	},
	decorators: [
		moduleMetadata({
			imports: [MatTooltipModule],
		}),
		componentWrapperDecorator(
			(story) =>
				`<div id="storywrapper" class="vr-theme theme-day" style="padding: 30px; background-color: #f5f5f5;">${story}</div>`
		),
	],
};

export default meta;
type Story = StoryObj<VrKitIconComponent>;

const template = iconPaths
	.map(
		(path) =>
			`<vr-kit-icon [path]="'${path}'" [colorKey]="colorKey" [size]="'36px'" [tooltipText]="'${path}'"></vr-kit-icon>`
	)
	.join(' ');

export const WithColorKey: Story = {
	args: {
		colorKey: '--black-white',
	},
	render: (args) => ({
		props: args,
		template: `<div style="display:flex; flex-wrap: wrap; gap: 20px;">${template}</div>`,
	}),
};
