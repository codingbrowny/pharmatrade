import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../storage';
// import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ ...props }) => {
  const { setItem } = useAsyncStorage(AsyncStorageKeys.onboard);
  //   const navigation = useNavigation();

  const doneButton = ({ ...data }) => (
    <TouchableOpacity style={styles.doneButton} {...data}>
      <Text>Finish</Text>
    </TouchableOpacity>
  );

  const handleDone = () => {
    props.navigation.navigate('Main');
    setItem(JSON.stringify({ onboard: true }));
  };

  return (
    <View style={styles.container}>
      <Onboarding
        bottomBarHighlight={false}
        onSkip={handleDone}
        onDone={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            image: (
              <View style={styles.lottieView}>
                <LottieView
                  style={styles.lottieView}
                  source={require('../../assets/transitions/welcome.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            backgroundColor: '#0284c7',
            title: 'Welcome to PharmaTrade',
            subtitle: 'Order drugs effortlessly for your pharmacy',
          },
          {
            image: (
              <View style={styles.lottieView}>
                <LottieView
                  style={styles.lottieView}
                  source={require('../../assets/transitions/pill.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            backgroundColor: '#6366f1',
            title: 'Extensive Drug Catalog',
            subtitle: 'Access a wide range of drugs and health products.',
          },
          {
            image: (
              <View style={styles.lottieView}>
                <LottieView
                  style={styles.lottieView}
                  source={require('../../assets/transitions/order-complete.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            backgroundColor: '#10b981',
            title: 'Simple Order Process',
            subtitle: 'Place orders quickly and easily',
          },
          {
            image: (
              <View style={styles.lottieView}>
                <LottieView
                  style={styles.lottieView}
                  source={require('../../assets/transitions/track-order-alt.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            backgroundColor: '#334155',
            title: 'Track Your Orders',
            subtitle:
              'Keep track of your orders in real-time as it is been delivered to you',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieView: {
    height: width,
    width: width * 0.9,
  },
  doneButton: {
    backgroundColor: 'white',
    color: '#030712',
    padding: 20,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});

export default OnboardingScreen;
