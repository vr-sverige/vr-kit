import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { VrKitArticleComponent } from './article.component';

export default {
  title: 'Components/Article',
  component: VrKitArticleComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitArticleComponent],
    }),
  ],
  argTypes: {
    display: {
      control: 'radio',
      options: ['sheet', 'white', 'transparent'],
    },
    title: { control: 'text' },
  },
} as Meta<VrKitArticleComponent>;

export const Default: StoryObj<VrKitArticleComponent> = {
  args: {
    display: 'sheet',
    title: 'Sample Article Title',
  },
};

export const White: StoryObj<VrKitArticleComponent> = {
  args: {
    display: 'white',
    title: 'White Article',
  },
};

export const Transparent: StoryObj<VrKitArticleComponent> = {
  args: {
    display: 'transparent',
    title: 'Transparent Article',
  },
};
