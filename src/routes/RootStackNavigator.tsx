import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigatorList} from './RoutesType';
import Home from '@screens/home/Home';

const RootStack = createNativeStackNavigator<RootStackNavigatorList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
