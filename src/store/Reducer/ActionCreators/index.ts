import {AppDispatch} from "../../Store";
import {addToOrders, delMenu, getAdmin, getFile, getMenu, getValue} from "../ChildSlice";
export const setValues = (el: any) => (dispatch: AppDispatch) => {
    dispatch(getValue(el))
}
export const setFile = (el: any) => (dispatch: AppDispatch) => {
    dispatch(getFile(el))
}
export const addToOrdersREC = (el: any) => (dispatch: AppDispatch) => {
    dispatch(addToOrders(el))
}

export const getAdminREC = (el: any) => (dispatch: AppDispatch) => {
    const adminL: any = localStorage.getItem("admin")
    let admin = JSON.parse(adminL) || []
    admin = [...admin, el]
    localStorage.setItem("admin", JSON.stringify(admin))
    dispatch(getAdmin(el))
}
export const getMenuREC = (el: any) => (dispatch: AppDispatch) => {
    const menuL: any = localStorage.getItem("menu")
    let menu = JSON.parse(menuL) || []
    const found = menu.find((e: any) => e.id === el.id)
    if (found) {
        menu = menu.map((e: any) => e.id === found.id ? {...e, quantity: el.quantity + 1} : e)
    } else {
        menu = [...menu, {...el, quantity: 1}]
    }
    localStorage.setItem("menu", JSON.stringify(menu))
    dispatch(getMenu(el))
}
export const delMenuREC = (el: any) => (dispatch: AppDispatch) => {
    const menuL: any = localStorage.getItem("menu")
    let menu = JSON.parse(menuL) || []
    menu = menu.filter((e: any) => e.id !== el.id)
    localStorage.setItem("menu", JSON.stringify(menu))
    dispatch(delMenu(el))
}
