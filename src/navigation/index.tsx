import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesName} from './routes';
import DateList from '../screens/DateList/DateList';
import PhotoList from '../screens/PhotoList/PhotoList';
import {Theme} from '../config/theme';
import PhotoDetails from '../screens/PhotoDetails/PhotoDetails';

export interface MainStackParamList {
  DATE_LIST: undefined;
  PHOTO_LIST: undefined;
}

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const noHeaderConfig = {
    header: () => null,
  };
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Screen
          name={routesName.DATE_LIST}
          component={DateList}
          options={{
            ...noHeaderConfig,
          }}
        />
        <Stack.Screen
          name={routesName.PHOTO_LIST}
          component={PhotoList}
          options={{
            ...noHeaderConfig,
          }}
        />
        <Stack.Screen
          name={routesName.PHOTO_DETAILS}
          component={PhotoDetails}
          options={{
            ...noHeaderConfig,
            presentation: 'modal',
            cardStyle: {backgroundColor: Theme.colors.secondary, flex: 1},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
