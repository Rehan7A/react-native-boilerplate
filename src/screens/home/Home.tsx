import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useHomeController} from './HomeController';
import Animated from 'react-native-reanimated';
import {fonts} from '@constants/fonts';

const Home = () => {
  const {ranimatedStyle} = useHomeController();
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, ranimatedStyle]} />
      <Text style={styles.text}>{"Hello Dev's"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:"center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 100 / 2,
  },
  text: {
    ...fonts.poppinsBold18,
  },
});

export default Home;
