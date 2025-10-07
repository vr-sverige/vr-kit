import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { VrKitPageHeaderComponent } from './page-header.component';
import { VrKitBreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

export default {
  title: 'Components/Page Header',
  component: VrKitPageHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitPageHeaderComponent, VrKitBreadcrumbComponent],
    }),
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
