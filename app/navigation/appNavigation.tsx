import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
//screen
import ImagesScreen from '../containers/ImagesContainer'
import CameraScreen from '../containers/CameraContainer'
import VideoScren from '../containers/VideoContainer'
//headerNextButton 
import { HeaderButton } from '../components'
import { navigationRef, isMountedRef } from './RootNavigation';
import { TabBar } from './CustomTabBar'
import styles from './styles/navigationStyles'

const ImagesStack = createStackNavigator();
function ImagesStackScreen() {
  return (
    <ImagesStack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        gestureEnabled: true
      }}>
      <ImagesStack.Screen
        name="ImagesScreen"
        component={ImagesScreen}
        options={{
          title: 'Recientes',
          headerRight: () => <HeaderButton title='Sigiente' onPress={() => { }} active />
        }} />
    </ImagesStack.Navigator>
  );
}

const CameraStack = createStackNavigator();

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        gestureEnabled: true
      }}>
      <CameraStack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={() => {
          return {
            title: 'Tomar foto',
            headerRight: () => <HeaderButton title='Sigiente' onPress={() => { }} active={false} />
          }
        }} />
    </CameraStack.Navigator>
  );
}

const VideoStack = createStackNavigator();

function VideoStackScreen() {
  return (
    <VideoStack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        gestureEnabled: true
      }}>
      <VideoStack.Screen
        name="VideoScreen"
        component={VideoScren}
        options={{
          title: 'Tomar video',
          headerRight: () => <HeaderButton title='Sigiente' onPress={() => { }} />
        }} />
    </VideoStack.Navigator>
  );
}

type RootStackParamList = {
  ImagesStack: undefined;
  CameraStack: undefined;
  VideoStack: undefined;
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
        initialRouteName='ImagesStack'
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          name='ImagesStack'
          component={ImagesStackScreen}
          options={{
            tabBarLabel: 'image',
          }}
        />
        <Tab.Screen
          name='CameraStack'
          component={CameraStackScreen}
          options={{
            tabBarLabel: 'photo'
          }}
        />
        <Tab.Screen
          name='VideoStack'
          component={VideoStackScreen}
          options={{
            tabBarLabel: 'video'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}