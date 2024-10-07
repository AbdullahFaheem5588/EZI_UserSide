import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/main/Welcome';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import { LogBox, StatusBar } from 'react-native';
import COLORS from './src/appStyles/colors';
import MobileVerification from './src/screens/auth/MobileVerification';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.limeGreen} barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MobileVerification" component={MobileVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;