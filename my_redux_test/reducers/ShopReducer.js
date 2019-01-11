
import * as ShopTypes from "../types/ShopTypes";

//这里只存储需要全局处理的数据，页面独有的state如input内容的state就在本身的页面使用。
const initialState = {
    hadAddedGoods:[],//购物车的所有数据

}
export default function ShopReducer(state=initialState, action) {
    switch (action.type) {

        case ShopTypes.Add_Good:
            console.log("add-Good");
            return{
                ...state,
                hadAddedGoods:state.hadAddedGoods.concat(action.choosedGoods)
            }
            break;
        case ShopTypes.Delete_Good:
            //console.log("Delete_Good"+JSON.stringify(action.needDeleteGoods));
            let all=state.hadAddedGoods;
            let showGoods=[];
            for(let i=0;i<all.length;i++){
                if(action.needDeleteGoods.name==all[i].name){

                }else {
                    showGoods.push(all[i]);
                }
            }
            return{
                ...state,
                hadAddedGoods:showGoods
            }
            break;
        default:
            console.log(state);
            return state;
    }
}
