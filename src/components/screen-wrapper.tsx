import { StyleSheet } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
});

export default ScreenWrapper;
