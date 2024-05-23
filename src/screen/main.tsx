import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, CartScreen, HomeScreen, SearchScreen } from '.';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const screens = [
    { name: 'Home', component: HomeScreen },
    { name: 'Search', component: SearchScreen },
    { name: 'Cart', component: CartScreen },
    { name: 'Account', component: AccountScreen },
  ];
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
