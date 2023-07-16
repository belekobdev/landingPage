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
                    <div className='relative flex items-center'>
                        <NavLink className='text-black mx-4 font-bold ' to={'/hero'}>Menu</NavLink>
                       {admin.length === 0 ? null : <p className='absolute left-[50px] top-[-20px] bg-[red] w-[25px] h-[25px] flex items-center justify-center rounded-[50%] text-white'>{admin.length}</p>} 
                        <NavLink className='text-black mx-[30px] font-bold' to={'/menu'}>Orders </NavLink>
                       {menu.length === 0 ? null : <p className='absolute left-[150px] top-[-20px] bg-[red] w-[25px] h-[25px] flex items-center justify-center rounded-[50%] text-white'>{menu.length}</p>} 

                        <NavLink className='text-black mx-4 font-bold' to={'/'}>Admin </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;