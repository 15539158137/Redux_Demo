import {createStore} from "redux"

import ReduxReducer from'./ReduxReducer'
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
    console.log(store.getState(ReduxReducer))
);

