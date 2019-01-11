import * as LoginTypes from '../types/LoginTypes';

//登录失败
export function loginFail() {
    return {
        type: LoginTypes.LOGIN_IN_ERROR,

    }
}
//登录成功
export function login_in(responseData) {

    return {
        type: LoginTypes.LOGIN_IN,
        responsedUserMessage: responseData,
    }
}

//注销登录
export function login_out() {
    return {
        type: LoginTypes.LOGIN_OUT
    }
}


//如果登录过程中需要显示加载框、提示框，最好把这个操作放在所在页面，因为上传中等等是所在页面独有的state，否则处理弹出框等等很麻烦
export function login() {
    console.log('登录方法');
    return dispatch => {
        // 模拟用户登录
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                //如果登录接口返回成功，那么把返回的json返回回去
                dispatch(login_in({
                    name: '小明',
                    age: 12,
                    image: '..',
                }));
            }).catch((e) => {
                //如果失败，把错误返回回去。

                dispatch(loginFail());
            })
    }
}