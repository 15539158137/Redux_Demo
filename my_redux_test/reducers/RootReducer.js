import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import ShopReducer from './ShopReducer';

//这个表示把多个reducer连接起来，
const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    ShopReducer:ShopReducer,
});

export default rootReducer;