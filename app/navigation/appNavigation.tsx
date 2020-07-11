import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ImagesScreen from '../containers/ImagesContainer'
//headerNextButton 
import { HeaderButton } from '../components'
import { navigationRef, isMountedRef } from './RootNavigation';
import styles from './styles/navigationStyles'

type RootStackParamList = {
  ImagesScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
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