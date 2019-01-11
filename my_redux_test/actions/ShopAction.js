import  * as ShopTypes  from '../types/ShopTypes'
//新增商品到购物车
export function add_goods(choosedGoods) {
    return {
        type: ShopTypes.Add_Good,
        choosedGoods: choosedGoods
    }
}

//删除商品
export function delete_goods(choosedGoods) {
    return {
        type: ShopTypes.Delete_Good,
        needDeleteGoods: choosedGoods
    }
}