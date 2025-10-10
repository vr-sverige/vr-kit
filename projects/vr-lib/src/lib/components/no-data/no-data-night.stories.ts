import { MatTooltipModule } from '@angular/material/tooltip';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { VrKitNoDataComponent } from './no-data.component';

const meta: Meta<VrKitNoDataComponent> = {
	title: 'Components/No Data/Night Theme',
	component: VrKitNoDataComponent,
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
type Story = StoryObj<VrKitNoDataComponent>;

export const Basic: Story = {
	args: {},
};

export const WithSubText: Story = {
	args: {
		label: 'No data available',
		subLabel: 'This is little subText',
	},
};
