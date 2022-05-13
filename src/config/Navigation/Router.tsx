import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import NewsDetails from '../../screens/NewsDetails';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

const Router = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            title: t('navigate:home'),
            headerBackTitle: t('navigate:home'),
          }}
          name="Home"
          component={HomeTabNavigator}
        />
        <Stack.Screen
          name="News Details"
          options={{
            title: t('navigate:details'),
            headerBackTitleVisible: false,
          }}
          component={NewsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
