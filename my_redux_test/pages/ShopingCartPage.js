'use strict';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {connect} from 'react-redux'; // 引入connect函数
import {Platform,Alert, FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as ShopAction from "../actions/ShopAction";

const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class ShopingCartPage extends React.Component {
    render() {
        const {deleteGoods} = this.props;//这是js解构赋值的写法等同于this.props.login
        //,


        return (
            <View style={{marginTop: 60, alignItems: 'center', backgroundColor: '#bfbfbf'}}>
                <FlatList style={{width: ScreenWidth, height: 0.8 * ScreenHeight}}
                          ItemSeparatorComponent={
                              () => {
                                  return <View style={{backgroundColor: 'white', width: ScreenWidth, height: 8}}/>;
                              }

                          }
                          ListEmptyComponent={
                              <View style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: ScreenWidth,
                                  height: 0.8 * ScreenHeight
                              }}>
                                  <Text>空空如也</Text>
                              </View>}
                          data={this.props.hadAddedGoods}
                          renderItem={({item}) => (
                              <View style={{
                                  backgroundColor: item.type == 0 ? 'gray' : '#005AB5',
                                  width: ScreenWidth,
                                  height: 0.13 * ScreenHeight
                              }}>
                                  <Text
                                      style={{fontSize: 17, marginTop: 20, marginLeft: 10}}
                                  >{item.name}</Text>

                                  <TouchableOpacity style={{
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      paddingLeft: 10,
                                      paddingRight: 10,
                                      borderRadius: 5,
                                      backgroundColor: 'red',
                                      position: 'absolute',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      bottom: 10, right: 10
                                  }} onPress={() => {
                                      Alert.alert(
                                          '警告',
                                          '确认删除吗',
                                          [
                                              {text: '取消', onPress: () => console.log('Ask me later pressed'), style: 'cancel'},
                                              {text: '确定', onPress: () => {
                                                      this.props.deleteGoods(item);
                                                  }},
                                          ],
                                          { cancelable: false }
                                      )





                                  }}>
                                      <Text style={{color: 'black'}}>点击删除</Text>
                                  </TouchableOpacity>
                              </View>

                          )}
                >
                </FlatList>
            </View>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("新的信息store--购物车" + JSON.stringify(nextProps));
        return true;
    }
};
export default connect(
    (state) => ({
        hadAddedGoods: state.ShopReducer.hadAddedGoods
    }),
    (dispatch) => ({

        deleteGoods: (data) => dispatch(ShopAction.delete_goods(data)),
    })
)(ShopingCartPage)