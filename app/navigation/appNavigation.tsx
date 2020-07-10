import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ImagesScreen from '../containers/ImagesContainer'
//headerNextButton 
import { HeaderButton } from '../components'
import styles from './styles/navigationStyles'

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
          headerStyle: styles.header,
          gestureEnabled: true
        }}>
        <RootStack.Screen
          name='ImagesScreen'
          component={ImagesScreen}
          options={{
            title: 'Recientes',
            headerRight: () => <HeaderButton title='Sigiente' onPress={() => { }} />
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}