import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
//screen
import ImagesScreen from '../containers/ImagesContainer'
import CameraScreen from '../containers/CameraContainer'
//headerNextButton 
import { HeaderButton } from '../components'
import { navigationRef, isMountedRef } from './RootNavigation';
import { TabBar } from './CustomTabBar'
import styles from './styles/navigationStyles'

type RootStackParamList = {
  ImagesScreen: undefined;
  CameraScreen: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainNavigator() {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName='ImagesScreen'
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          headerStyle: styles.header,
          gestureEnabled: true
        }}>
        <Tab.Screen
          name='ImagesScreen'
          component={ImagesScreen}
          options={{
            title: 'Recientes',
            tabBarLabel: 'image',
            headerRight: () => <HeaderButton title='Sigiente' onPress={() => { }} />
          }}
        />
        <Tab.Screen
          name='CameraScreen'
          component={CameraScreen}
          options={{
            title: 'Tomar foto',
            tabBarLabel: 'photo',
            headerRight: () => <HeaderButton title='Sigiente' onPress={() => { }} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}