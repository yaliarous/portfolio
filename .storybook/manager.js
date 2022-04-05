import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://Mohamedw.com/icon.svg',
    brandTitle: 'Mohamed ALI AROUS Components',
    brandUrl: 'https://Mohamedw.com',
  },
});
