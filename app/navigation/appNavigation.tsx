import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ImagesScreen from '../containers/ImagesContainer'

type RootStackParamList = {
  ImagesScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='ImagesScreen'
        screenOptions={{
          gestureEnabled: true
        }}>
          <RootStack.Screen
            name='ImagesScreen'
            component={ImagesScreen}
          />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}