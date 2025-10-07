import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { VrKitStepperComponent, Step } from './stepper.component';

export default {
  title: 'Components/Stepper',
  component: VrKitStepperComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitStepperComponent],
    }),
  ],
  argTypes: {
    items: { control: 'object' },
  },
} as Meta<VrKitStepperComponent>;

const steps: Step[] = [
    { displayName: 'Mora C', active: true },
    { displayName: 'Rattvik', active: true },
    { displayName: 'Leksand', active: false },
    { displayName: 'Djuras', active: false },
];

export const Default: StoryObj<VrKitStepperComponent> = {
  args: {
    items: steps,
  },
};
