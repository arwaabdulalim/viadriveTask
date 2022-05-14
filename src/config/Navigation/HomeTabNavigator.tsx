import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from '../../screens/Home';
import Settings from '../../screens/Settings';
import colors from '../themes/colors';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'News Feed'}
        component={HomeScreen}
        options={{
          title: t('navigate:news'),
          tabBarLabel: t('navigate:newsTab'),
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={22} color={colors.primary} />
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          title: t('navigate:settings'),
          tabBarLabel: t('navigate:settings'),
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="settings" size={25} color={colors.primary} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
