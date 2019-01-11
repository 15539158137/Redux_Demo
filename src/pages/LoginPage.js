import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import *as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions,NavigationActions } from 'react-navigation';
const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import MainPage from './MainPage';
const resetAction = StackActions.reset({
  index: 0,
  actions: [
      NavigationActions.navigate({ routeName: 'MainPage'})
  ]
})

 class LoginPage extends Component {
  static navigationOptions = {
    title: 'LoginPage',
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 登录完成,切成功登录
    if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false;
    }
    return true;
  }

  render() {
    const { login } = this.props;
    return(
      <View style={styles.container}>
        <Text>状态: {this.props.status}
        </Text>
        <TouchableOpacity onPress={()=>login()} style={{marginTop: 50}}>
          <View style={styles.loginBtn}>
            <Text>登录
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

     componentDidMount() {
      //解构赋值
         //1，对象
         let user={
             a:2,
             b:3,
             method:()=>{
                 console.log("我是一个方法");
             }
         };
         let {a,method}=user;
         console.log(a+"=="+method);
         //2==function method() {
         //             console.log("我是一个方法");
         //           }

         //2数组
         let array=[1,2,3,4];
         let [arr1,,arr2]=array;
         console.log("2数组"+arr1+"=="+arr2);//输出1==3

         //用来解析json
         let json={'name':'王钢蛋','age':1};
         let{name,age}=json;
         console.log(name+age);//输出王钢蛋1
         //用来遍历map
         let map=new Map();
         map.set('key0','value0');
         map.set('key1','value1');
         for(let[key,value] of map){
             console.log(key+'=='+value);
         }
         //输出key0==value0
         //  key1==value1

     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  loginBtn: {
    borderWidth: 1,
    padding: 5,
  }
});

export default connect(
  (state) => ({
    status: state.loginReducer.status,
    isSuccess: state.loginReducer.isSuccess,
    user: state.loginReducer.user,
  }),
  (dispatch) => ({
    login: () => dispatch(loginAction.login()),
  })
)(LoginPage)
