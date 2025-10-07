import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { VrKitBreadcrumbComponent, IBreadcrumb } from './breadcrumb.component';

export default {
  title: 'Components/Breadcrumb',
  component: VrKitBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitBreadcrumbComponent],
    }),
  ],
  argTypes: {
    list: { control: 'object' },
    onClick: { action: 'breadcrumb clicked' },
  },
} as Meta<VrKitBreadcrumbComponent>;

const exampleList: IBreadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Section', url: '/section' },
  { label: 'Page', url: '/section/page' },
];

export const Default: StoryObj<VrKitBreadcrumbComponent> = {
  args: {
    list: exampleList,
  },
};
