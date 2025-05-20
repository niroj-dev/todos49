import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToDoContext } from './Context/ToDoProvider';

function Edit() {
    const location = useLocation();
    const [updatedTask, setUpdatedTask] = useState(location.state.task);
    const{dispatch}= useContext(ToDoContext)
   const navigate =useNavigate();
    return (
        <div className='m-auto w-100 p-5 space-x-2 mt-10'>
            <input value={updatedTask}
                onChange={(e) => {
                    setUpdatedTask(e.target.value)
                }}
                type="text" placeholder='Enter your task' className='border outline-none p-2 rounded-2xl' />
            <button 
            onClick={()=>{
                dispatch({
                    type:"editTask",
                    payload:{id:location.state.id, task:updatedTask},
                });
                navigate("/");
            }}
            className='bg-orange-400 p-2 rounded-2xl text-white'>update task</button>
        </div>
    )
}

export default Edit
