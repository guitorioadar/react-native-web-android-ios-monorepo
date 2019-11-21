import React,{Component} from 'react';
import {Text,View,StyleSheet,Platform} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const AppStackNavigator = createStackNavigator({
        Home: HomeScreen,
        Details: DetailScreen,
    },
    {
        initialRouteName: 'Home'
    },
);

const Stack = createAppContainer(AppStackNavigator);

export  default Stack;
