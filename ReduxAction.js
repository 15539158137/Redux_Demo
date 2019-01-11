

let getUserMessage=()=>{
    //15002142517&pwd=123456'
    var url = GLOBAL.baseUrl + 'XCAPI/Login?name=' + this.state.username.replace(/\s+/g, "") + '&pwd=' + this.state.password.replace(/\s+/g, "");
    var opts = {
        method: 'GET'
    }
    fetch(url, opts).then((response) => {

        return response.json();
    }).then((json) => {
//这里就是json
        console.log('deng登录返回的信息' + JSON.stringify(json));
    }).catch((error) => {
        console.log("获取账号异常" + error);

    })
}



let nextTodoId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}