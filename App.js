/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Root  from './src/Root'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import ConfigureStore from'./src/store/ConfigureStore';
type Props = {};
const store = ConfigureStore();
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
     <Root/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
