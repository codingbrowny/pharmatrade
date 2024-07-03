import { CartScreen, HomeScreen, SearchScreen, SettingsScreen } from '..';

export type ScreenConfig = {
  name: string;
  component: React.ComponentType<any>;
  iconModule: 'Ionicon' | 'FeatherIcon' | 'Octicon';
  iconName: string;
  //   iconFocusedName: string;
};

export const screens: ScreenConfig[] = [
  {
    name: 'Home',
    component: HomeScreen,
    iconModule: 'Octicon',
    iconName: 'home',
  },
  {
    name: 'Search',
    component: SearchScreen,
    iconModule: 'FeatherIcon',
    iconName: 'search',
  },
  {
    name: 'Cart',
    component: CartScreen,
    iconModule: 'Ionicon',
    iconName: 'cart-outline',
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    iconModule: 'Ionicon',
    iconName: 'settings-outline',
  },
];
