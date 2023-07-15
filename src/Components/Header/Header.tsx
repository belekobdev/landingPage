import React from 'react';
import logo from '../../Img/logo.svg'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../Hooks";

const Header = () => {
    const {admin, order, menu} = useAppSelector(state => state.lastReducer)
    return (
        <div>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <img src={logo} alt=""/>
                    <div className='flex items-center'>
                        <NavLink className='text-black mx-4 font-bold' to={'/hero'}>Menu</NavLink>
                        <NavLink className='text-black mx-4 font-bold' to={'/menu'}>Orders </NavLink>
                        <NavLink className='text-black mx-4 font-bold' to={'/'}>Admin </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;