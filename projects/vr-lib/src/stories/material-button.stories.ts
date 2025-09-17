import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';

@Component({
  selector: 'storybook-material-button',
  template: `<button mat-raised-button color="primary">Material Button</button>`
})
class StorybookMaterialButtonComponent {}

export default {
  title: 'Material/Button',
  component: StorybookMaterialButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
      declarations: [StorybookMaterialButtonComponent],
    }),
  ],
} as Meta<StorybookMaterialButtonComponent>;

type Story = StoryObj<StorybookMaterialButtonComponent>;

export const Primary: Story = {};
