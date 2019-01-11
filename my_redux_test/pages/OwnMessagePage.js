import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {connect} from 'react-redux'; // 引入connect函数
import *as LoginAction from '../actions/LoginAction'; // 引入connect函数
import {Platform, Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import LoadingDialog from '../views/LoadingDialog'

class OwnMessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loadingNeedShow: false}
    }

    render() {
        const {login_in, login_out} = this.props;
        //this.props.status=="登录出错"?true:false
        return (
            <View style={{marginTop: 60, alignItems: 'center', justifyContent: 'center'}}>
                <LoadingDialog ref={(component) => {
                    this.LoadingDialog = component
                }} onRequestClose={this.onRequestClose.bind(this)} />
                <Text style={{marginTop: 60,padding:20}}>用户信息:{
                    this.props.status == "在线" ? JSON.stringify(this.props.responsedUserMessage) : '尚未登录，未知！'
                }</Text>
                <TouchableOpacity style={{
                    marginTop: 220,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    borderRadius: 5,
                    width: ScreenWidth * 0.85, height: 0.05 * ScreenHeight
                }} onPress={() => {
                    this.props.status == "在线" ? login_out() : this.login()
                    ;
                }}>
                    <Text style={{color: '#ffffff'}}>{this.props.status == "在线" ? "点击退出登录" : '点击登录'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onRequestClose() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        return true;
    }

    login(userName, password) {
        this.LoadingDialog.show();
        let result = fetch('http://192.168.1.14:8080/livingsongjiang-0.0.1-SNAPSHOT/UserControl/login?name=110&pwd=123456')
            .then((res) => {
                //如果登录接口返回成功，那么把返回的json返回回去
                return res.json();
                console.log("res" + JSON.stringify(res));
            }).then((json) => {
                console.log("json" + JSON.stringify(json));
               this.LoadingDialog.close();

                if (json.Statu == 1) {
                    this.props.login_in(json.Data);
                } else {
                    this.props.loginFail();
                }
                new Promise((resolve, reject) => {
                    this.timer = setTimeout(() => {
                        resolve();
                    }, 500)
                }).then(() => {
                    Alert.alert('提示', json.Msg, [{
                        text: '确定', onPress: () => {
                        }
                    }], {cancelable: false});
                }).catch((e)=>{
                    console.log("出现异常"+e.toString());
                });
            }).catch((e) => {
                //如果失败，把错误返回回去。
                console.log("error" + e.toString());
                this.LoadingDialog.close();
                new Promise((resolve, reject) => {
                    this.timer = setTimeout(() => {
                        resolve();
                    }, 500)
                }).then(() => {
                    Alert.alert('提示', e.toString(), [{
                        text: '确定', onPress: () => {

                        }
                    }], {cancelable: false});
                });
            })


        console.log("result" + JSON.stringify(result));

    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
};
export default connect(
    (state) => ({
        status: state.LoginReducer.status,
        responsedUserMessage: state.LoginReducer.responsedUserMessage,

    }),
    (dispatch) => ({
        login_in: (user) => dispatch(LoginAction.login_in(user)),
        login_out: () => dispatch(LoginAction.login_out()),
        loginFail: () => dispatch(LoginAction.loginFail()),
    })
)(OwnMessagePage)