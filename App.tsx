/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import './app/config'
import DebugConfig from './app/config/DebugConfig'
import './app/config/ReactotronConfig'
import React from 'react';
import RootContainer from './app/containers/RootContainer'
import { Provider } from 'react-redux'
import createStore from './app/redux'
declare const global: { HermesInternal: null | {} };

// create our store
export const store = createStore()

const App = () => {
  return (
    <Provider store={store}>
        <RootContainer />
    </Provider>
  );
};

export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App

