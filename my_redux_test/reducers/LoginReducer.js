
import * as LoginTypes from "../types/LoginTypes";

//这里只存储需要全局处理的数据，页面独有的state如input内容的state就在本身的页面使用。
const initialState = {
    status: '离线',//表示当前的登录状态，在线离线两种状态==用0和1当然更好了
    responsedUserMessage: null,//登录后的用户信息

}
export default function LoginReducer(state=initialState, action) {
    switch (action.type) {
        case LoginTypes.LOGIN_IN:
            return {
                ...state,
                status: '在线',
                responsedUserMessage: action.responsedUserMessage,
            }
            break;
        case LoginTypes.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '离线',
                responsedUserMessage: null,
            }
            break;
            case LoginTypes.LOGIN_OUT:
        return {
            ...state,
            status: '离线',
            responsedUserMessage: null,
        }
        break;
        default:
            console.log(state);
            return state;
    }
}
