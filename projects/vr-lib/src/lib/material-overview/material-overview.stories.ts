import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MaterialOverviewComponent } from './material-overview.component';

export default {
  title: 'Material/Overview',
  component: MaterialOverviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Overview of Angular Material components and usage in this library.'
      }
    }
  }
} as Meta<MaterialOverviewComponent>;

type Story = StoryObj<MaterialOverviewComponent>;

export const Overview: Story = {
  args: {},
};
