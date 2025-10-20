import { Meta, StoryObj, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { VrKitPageHeaderComponent } from './page-header.component';
import { VrKitBreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

export default {
  title: 'Components/Page Header/Day',
  component: VrKitPageHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitPageHeaderComponent, VrKitBreadcrumbComponent],
    }),
    componentWrapperDecorator(
			(story) =>
				`<div id="storywrapper" class="vr-theme theme-day" style="padding: 30px; background-color: #f5f5f5;">${story}</div>`
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
