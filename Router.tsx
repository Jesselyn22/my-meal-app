import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/Screens/Splash/Index';

const Stack = createNativeStackNavigator();

export default function StackNavigation(props: any) {
  const REF_NAV = React.useRef<any>();
  return (
    <NavigationContainer ref={REF_NAV}>
      <Stack.Navigator initialRouteName={'Splash'} screenOptions={() => ({})}>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
