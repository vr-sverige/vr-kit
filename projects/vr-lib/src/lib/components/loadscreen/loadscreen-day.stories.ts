import { applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { VrKitLoadscreenComponent } from './loadscreen.component';
import { ThemeService, DAY_THEME, THEME_KEY } from '../../services/theme.service';

const meta: Meta<VrKitLoadscreenComponent> = {
  title: 'Components/Loadscreen/Day Theme',
  component: VrKitLoadscreenComponent,
  decorators: [
    applicationConfig({
      providers: [
        {
          provide: ThemeService,
          useFactory: () => {
            localStorage.setItem(THEME_KEY, DAY_THEME);
            return new ThemeService();
          },
        },
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div id="storywrapper" class="vr-theme theme-day" style="background-color: #ffffff; height: 100vh;">${story}</div>`
    ),
  ],
};

export default meta;
type Story = StoryObj<VrKitLoadscreenComponent>;

export const Default: Story = {};
