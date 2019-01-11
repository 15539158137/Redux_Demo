import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
    createStackNavigator
} from 'react-navigation';
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
const Router=createStackNavigator({
    LoginPage: { screen: LoginPage },
    MainPage: { screen: MainPage},
},RouterConfig);
const RouterConfig={
    initialRouteName:'LoginPage',
    paths:'../',
    headerMode: 'float',
    cardStyle: {
        backgroundColor: 'white'
        ,
    },
    navigationOptions: {
        title: '',
        headerTitleStyle: {fontSize: 18, color: '#666666'},
        headerStyle: {height: 48, backgroundColor: '#fff'},
    },
};



export default Router
