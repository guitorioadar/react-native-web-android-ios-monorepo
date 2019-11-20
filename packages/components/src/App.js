import React from 'react';
import {Button} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStackNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailScreen,
        },
    },
    {
      initialRouteName: 'Home'
    },
);

const NavDrawer = createDrawerNavigator({
    Home : {
        screen: AppStackNavigator
    },
    Profile: {
        screen: ProfileScreen
    }
});

const Stack = createAppContainer(NavDrawer);

export  default Stack;
