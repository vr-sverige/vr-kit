import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { VrKitArticleComponent } from './article.component';
import { componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Components/Article/Day',
  component: VrKitArticleComponent,
  decorators: [
    moduleMetadata({
      imports: [VrKitArticleComponent],
    }),
    componentWrapperDecorator(
			(story) =>
				`<div id="storywrapper" class="vr-theme theme-day" style="padding: 30px; background-color: #f5f5f5;">${story}</div>`
		),
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
