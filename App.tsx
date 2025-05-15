import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoverScreen from './src/screens/DiscoverScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {COLORS} from './src/constants';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const DiscoverTabBarIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="search" color={color} size={size} />
);

const ProfileTabBarIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="person" color={color} size={size} />
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
        }}>
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: DiscoverTabBarIcon,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ProfileTabBarIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
