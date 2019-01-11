import {createBottomTabNavigator} from 'react-navigation';
import React, {
    Component,
} from 'react'
import {
    View
    ,
    Text,
    Image,
} from 'react-native'
const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import GoodsPage from '../pages/GoodsPage'
import OwnMessagePage from '../pages/OwnMessagePage'
import ShopingCartPage from '../pages/ShopingCartPage'
export default createBottomTabNavigator({
    GoodsPage: { screen: GoodsPage },
    ShopingCartPage:{screen:ShopingCartPage},
    OwnMessagePage: { screen: OwnMessagePage},

    }, {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'GoodsPage') {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: ScreenHeight * 0.06,
                        height: ScreenHeight * 0.055
                    }}>
                        <Image style={{width: ScreenHeight * 0.03, height: ScreenHeight * 0.03}}
                               source={focused ? require('../../images/y_work.png') : require('../../images/n_work.png')}></Image>
                        <Text style={{color: tintColor, fontSize: 10}}>商品</Text>
                    </View>

                } else if (routeName === 'OwnMessagePage') {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: ScreenHeight * 0.06,
                        height: ScreenHeight * 0.055
                    }}>
                        <Image style={{width: ScreenHeight * 0.027, height: ScreenHeight * 0.03}}
                               source={focused ? require('../../images/y_me.png') : require('../../images/n_me.png')}></Image>
                        <Text style={{color: tintColor, fontSize: 10}}>我的</Text>
                    </View>
                }else if (routeName === 'ShopingCartPage') {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: ScreenHeight * 0.06,
                        height: ScreenHeight * 0.055
                    }}>
                        <Image style={{width: ScreenHeight * 0.027, height: ScreenHeight * 0.03}}
                               source={focused ? require('../../images/y_mess.png') : require('../../images/n_mess.png')}></Image>
                        <Text style={{color: tintColor, fontSize: 10}}>购物车</Text>
                    </View>
                }  else {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: ScreenHeight * 0.06,
                        height: ScreenHeight * 0.055
                    }}>
                        <Image style={{width: ScreenHeight * 0.03, height: ScreenHeight * 0.03}}
                               source={focused ? require('../../images/y_work.png') : require('../../images/n_me.png')}></Image>
                        <Text style={{color: tintColor, fontSize: 10}}>独立</Text>
                    </View>


                }

            },
        }),

        //是否可以滑动切换
        swipeEnabled: false,
        //切换是否有动画
        animationEnabled: true,
        //首页
        initialRouteName: 'GoodsPage',
        //对于导航的设置
        tabBarOptions: {
            //选中时的颜色，可以用来设置图片和文字，自动设置的
            activeTintColor: '#4b4b8A',
            //未选中的颜色
            inactiveTintColor: '#848484',
            //android特有下划线的颜色
            indicatorStyle: {height: 0},
            //文字的样式
            labelStyle: {
                fontSize: 10
            },
            //是否显示图标，默认不显示
            showIcon: true,
            //是否显示文字
            showLabel: false,
            //对于导航的stytle
            style: {
                justifyContent: 'center',
                borderTopColor: '#ebebeb',
                borderTopWidth: 1,
                backgroundColor: 'white',
                height: ScreenHeight * 0.06,
            }
        }

    },
)