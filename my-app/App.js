import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/components/HomeScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen';
import CameraScreen from './src/components/CameraScreen';
import UploadScreen from './src/components/UploadScreen';


import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?', 
  'VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.',
  'componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.'
])


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        headerShown: false,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
        headerShown: false,
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
        headerShown: false,
    }
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Upload: {
    screen: UploadScreen,
    navigationOptions: {
        headerShown: false,
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});