import {Provider} from 'react-redux';
import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import ViewPageRouter from '../my_redux_test/router/ViewPageRouter'
import ReduxStore from '../my_redux_test/store/ReduxStore'
//用例描述：三个页面，分别是主页(包含登录和模拟加入购物车)，购物车和用户信息
const reduxStore=ReduxStore();
export default class Main extends React.Component{
    render() {
        return (

           <Provider store={reduxStore}>
        <ViewPageRouter/>
        </Provider>

        );
    }

}

let test=()=>{
    <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('ViewPageRouter');
        }}
        style={{
            marginTop:100,
            backgroundColor:'#ff0000',
            width:60,height:40,
        }}>
        <Text>跳转</Text>
    </TouchableOpacity>

}
