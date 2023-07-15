import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import uniqID from "uniqid"
interface IAdminState {
    value: Partial<any>,
    order: any[],
    admin: any[],
    menu: any[]
}
const adminL: any = localStorage.getItem("admin")
const menuL: any = localStorage.getItem("menu")
export const initialState: IAdminState = {
    value: {
        title: "",
        price: "",
        file: "",
    },
    order: [],
    admin: JSON.parse(adminL) || [],
    menu: JSON.parse(menuL) || []
}
export const lastReducer = createSlice({
    name: "admin",
    initialState,
    reducers: {
        getValue(state, {payload}: PayloadAction<any>) {
            state.value = payload
        },
        getFile(state, {payload}: PayloadAction<any>) {
            state.value.file = payload
        },
        addToOrders(state, {payload}: PayloadAction<any>) {
            const newPr = {
                title: payload.title,
                price: payload.price,
                image: payload.file,
                id: uniqID()
            }
            state.order = [newPr]
        },
        getAdmin(state,{payload}: PayloadAction<any> ) {
            state.admin = [...state.admin, {...payload}]
        },
        getMenu(state,{payload}: PayloadAction<any>) {
            const fount = state.menu.find(el => el.id === payload.id)
            if (fount) {
                state.menu = state.menu.map(el => el.id === fount.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.menu = [...state.menu, {...payload, quantity: 1}]
            }
        },
        delMenu(state,{payload}: PayloadAction<any>) {
            state.menu = state.menu.filter(el => el.id !== payload.id)
        }
    }
})

export const {getValue,getFile,addToOrders,getAdmin,getMenu,delMenu} = lastReducer.actions
export default lastReducer.reducer