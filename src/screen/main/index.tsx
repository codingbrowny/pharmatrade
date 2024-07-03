import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getIconModule } from './icons';
import { screens } from './screens';
import { StyleSheet } from 'react-native';
import { AppColors } from '../../constants';

export type IconModule = typeof Ionicon | typeof FeatherIcon;

const Tab = createBottomTabNavigator();

const tabBarIcon = (iconModule: string, iconName: string, { ...props }) => {
  const Icon = getIconModule(iconModule);
  return (
    <Icon
      name={iconName}
      {...props}
      size={30}
      color={props.focused ? AppColors.primary : '#94a3b8'}
    />
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBar,
      }}
      initialRouteName="Home">
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: props =>
              tabBarIcon(screen.iconModule, screen.iconName, props),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    padding: 5,
  },
});

export default MainScreen;
