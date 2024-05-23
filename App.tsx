/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, OnboardingScreen} from './src/screen';
import {AsyncStorageKeys} from './src/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    checkOnboardState();
  });

  const checkOnboardState = async () => {
    const data = await AsyncStorage.getItem(AsyncStorageKeys.onboard);
    if (data) {
      setShowOnboarding(false);
    } else {
      await AsyncStorage.setItem(
        AsyncStorageKeys.onboard,
        JSON.stringify({onboard: false}),
      );
      setShowOnboarding(true);
    }
  };

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'blue'}
          animated
        />
      </SafeAreaView> */}
      <Stack.Navigator initialRouteName={showOnboarding ? 'Onboard' : 'Home'}>
        {showOnboarding ? (
          <Stack.Screen
            name="Onboard"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
