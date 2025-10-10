import { MatTooltipModule } from '@angular/material/tooltip';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { VrKitIconComponent } from './icon.component';
import { iconPaths } from './iconpaths';

const meta: Meta<VrKitIconComponent> = {
	title: 'Components/Icon/Night Theme',
	component: VrKitIconComponent,
	decorators: [
		moduleMetadata({
			imports: [MatTooltipModule],
		}),
		componentWrapperDecorator(
			(story) =>
				`<div id="storywrapper" class="vr-theme theme-night" style="padding: 30px; background-color: #404040;">${story}</div>`
		),
	],
};

export default meta;
type Story = StoryObj<VrKitIconComponent>;

const template = iconPaths
	.map(
		(path) =>
			`<vr-kit-icon [path]="'${path}'" [color]="color" [size]="'36px'" [tooltipText]="'${path}'"></vr-kit-icon>`
	)
	.join(' ');

export const IconList: Story = {
	render: (args) => ({
		props: args,
		template: `<div style="display:flex; flex-wrap: wrap; gap: 20px;">${template}</div>`,
	}),
};
