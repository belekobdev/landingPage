import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {addToOrdersREC, getAdminREC, setFile, setValues} from "../../store/Reducer/ActionCreators";

const Admin = () => {
    const {order} = useAppSelector(s => s.lastReducer)
    const {value} = useAppSelector(s => s.lastReducer)
    const dispatch = useAppDispatch()

    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        dispatch(setFile(fileReader.result))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(setValues({...value, [e.target.name]: e.target.name !== "file" ? e.target.value : fileReader.readAsDataURL(e.target.files[0])}))
    }

    return (
        <div id='admin'>
            <div className='container'>
                <div className='flex justify-around'>
                    <div className='flex flex-col'>
                        <input onChange={handleChange} name={"file"}  className='w-[300px] py-2 px-4 my-6 rounded outline-0' type="file" placeholder='choose file'/>
                        <input onChange={handleChange} name={"title"}  className='w-[350px] py-2 px-4 my-6 rounded outline-0' type="text" placeholder='food name'/>
                        <input  onChange={handleChange} name={"price"} className='w-[350px] py-2 px-4 my-6 rounded outline-0' type="text" placeholder='price'/>
                        <button onClick={() => dispatch(addToOrdersREC(value))} className='bg-yellow-300 text-white py-2 px-4 w-[120px] rounded'>create</button>
                    </div>
                    <div className='w-[477px] h-[289px] flex flex-col rounded bg-gray-300 flex justify-center items-center'>
                        {
                            order.map(el => (
                                <>
                                    <img className='w-[100%] h-[100%] h-32' src={el.image} alt=""/>
                                    <h1>{el.title}</h1>
                                    <h1>{el.price}$</h1>
                                    <h1 hidden={el.title !== "" && true} className='font-mono text-2xl '>place for a photo</h1>
                                    <button onClick={() => dispatch(getAdminREC(el))} className='bg-yellow-300 text-white py-2 px-4 w-[120px] rounded'>create</button>
                                </>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;