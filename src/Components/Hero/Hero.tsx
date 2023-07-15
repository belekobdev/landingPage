import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {getMenuREC} from "../../store/Reducer/ActionCreators";

const Hero = () => {
    const {admin} = useAppSelector(s => s.lastReducer)
    const dispatch = useAppDispatch()
    return (
        <div id='hero'>
            <div className="container">
                <div className='flex items-center justify-between flex-wrap'>
                    {
                        admin.map((el: any) => (
                            <div className='bg-gray-300 my-4 w-[350px] rounded'>
                                <div className='flex justify-center py-2'>
                                    <img src={el.image} alt="img"/>
                                </div>
                                <div className='w-[90%] mx-auto'>
                                    <h1>{el.title}</h1>
                                    <div className='flex pb-4 justify-between'>
                                        <h1>{el.price}$</h1>
                                        <button onClick={() => dispatch(getMenuREC(el))} className='bg-yellow-300 text-white py-1 px-3 rounded'>to order</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                 </div>
            </div>
        </div>
    );
};

export default Hero;