'use strict';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {connect} from 'react-redux'; // 引入connect函数
import *as LoginAction from '../actions/LoginAction'; // 引入connect函数
import *as ShopAction from '../actions/ShopAction'; // 引入connect函数
import {Platform, Alert,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
  class GoodsPage extends React.Component {
    render() {
        const {login}=this.props;//这是js解构赋值的写法等同于this.props.login
        let bean1=  {'type':"LOGIN_IN_DOING"};
        let bean=      {type:"LOGIN_IN_DOING"};
        return (
            <View style={{marginTop:60,alignItems:'center',justifyContent:'center'}}>
                <Text>{this.props.status=="在线"?"欢迎你:"+this.props.responsedUserMessage.name:'请登录'}</Text>
                <TouchableOpacity style={{
                    marginTop:10,
                    justifyContent:'center',
                    alignItems:'center',
                    width:ScreenWidth*0.9,height:0.1*ScreenHeight,
                    borderRadius:5,
                    borderColor:'red',
                    backgroundColor:'gray'
                }} onPress={()=>{

                    let goods={name:'商品1:购买毫秒数'+new Date().getTime(),type:0};

                      this.props.addGoods(goods);
                }}>
                    <Text>添加商品1到购物车</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    marginTop:20,
                    justifyContent:'center',
                    alignItems:'center',
                    width:ScreenWidth*0.9,height:0.1*ScreenHeight,
                    borderRadius:5,
                    borderColor:'red',
                    backgroundColor:'#005AB5'
                }} onPress={()=>{

                    let goods={name:'商品2:购买毫秒数'+new Date().getTime(),type:1};

                    this.props.addGoods(goods);
                }}>
                    <Text>添加商品2到购物车</Text>
                </TouchableOpacity>
            </View>
        );
    }
     shouldComponentUpdate(nextProps, nextState) {
        console.log("新的信息store里面的fragment2reducer"+JSON.stringify(nextProps.data));
         // 登录完成,切成功登录
         if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
             return true;
         }
         return true;
     }
};
export default connect(
    (state) => ({
        status: state.LoginReducer.status,
        responsedUserMessage: state.LoginReducer.responsedUserMessage,
        hadAddedGoods:state.ShopReducer.hadAddedGoods,
    }),
    (dispatch) => ({
        login: () => dispatch(LoginAction.login()),
        addGoods:(goods)=>{dispatch(ShopAction.add_goods(goods))}
    })
)(GoodsPage)