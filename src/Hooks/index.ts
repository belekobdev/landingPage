import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, rootState} from "../store/Store";


export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector


export const useAppDispatch = () => useDispatch<AppDispatch>()