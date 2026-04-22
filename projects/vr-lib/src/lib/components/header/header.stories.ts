import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { VrKitHeaderComponent, UserInfoModel } from './header.component';

export default {
  title: 'Components/Header',
  component: VrKitHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A complex header component with navigation, user info, and district selection.'
      }
    }
  }
} as Meta<VrKitHeaderComponent>;

type Story = StoryObj<VrKitHeaderComponent>;

const userInfo: UserInfoModel = {
  name: 'John Doe',
  emailLabel: 'Email',
  emailContent: 'john.doe@example.com',
  phoneLabel: 'Phone',
  phoneContent: '+123456789',
  districtLabel: 'District',
  districtContent: 'Central',
  roleLabel: 'Role',
  roleContent: ['Admin'],
  logoutLabel: 'Logout',
};

const navigationItems = [
  { route: '', name: 'Home', isActive: true },
  { route: '/about', name: 'About', isActive: false },
  { route: '/contact', name: 'Contact', isActive: false },
  { route: '/help', name: 'Help', isActive: false }
];

const districts = [
  { id: 1, name: 'Central' },
  { id: 2, name: 'North' },
  { id: 3, name: 'South' }
];

export const Default: Story = {
  args: {
    navigationItems,
    districts,
    currentDistrictIds: [1],
    userInfoModel: userInfo,
    isThemeToggleActive: true,
  },
};
