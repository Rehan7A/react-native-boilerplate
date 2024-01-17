import React from 'react';
import RootStackNavigator from '@routes/RootStackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';

const AppEntry = () => {
  return (
    <KeyboardAvoidingView style={styles.keyboadViewStyle}>
      <GestureHandlerRootView style={styles.gestureViewStyle}>
        <RootStackNavigator />
      </GestureHandlerRootView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboadViewStyle: {
    flex: 1,
  },
  gestureViewStyle: {
    flex: 1,
  },
});

export default AppEntry;
