import { Meta, StoryObj, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { VrKitPageHeaderComponent } from './page-header.component';
import { VrKitBreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

export default {
  title: 'Components/Page Header/Night',
  component: VrKitPageHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitPageHeaderComponent, VrKitBreadcrumbComponent],
    }),
    componentWrapperDecorator(
			(story) =>
				`<div id="storywrapper" class="vr-theme theme-night" style="padding: 30px; background-color: #404040;">${story}</div>`
		),
  ],
  argTypes: {
    title: { control: 'text' },
    breadcrumbList: { control: 'object' },
  },
} as Meta<VrKitPageHeaderComponent>;

export const Default: StoryObj<VrKitPageHeaderComponent> = {
  args: {
    title: 'Dashboard',
    breadcrumbList: [
      { label: 'Home', url: '/' },
      { label: 'Dashboard', url: '/dashboard' },
    ],
  },
};
