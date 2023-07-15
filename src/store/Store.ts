import {combineReducers, configureStore} from "@reduxjs/toolkit";
import lastReducer from "./Reducer/ChildSlice";


const rootReducer = combineReducers({
    lastReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]