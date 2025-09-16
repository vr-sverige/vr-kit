import type { Meta, StoryObj } from '@storybook/angular';
import { VrLibComponent } from './vr-lib.component';

const meta: Meta<VrLibComponent> = {
  title: 'vr-lib/VrLibComponent',
  component: VrLibComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VrLibComponent>;

export const Default: Story = {
  args: {},
};
