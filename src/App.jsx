import React, { useContext, useState } from 'react'
import { ToDoContext } from './Context/ToDoProvider';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';

function App() {
  const { state, dispatch } = useContext(ToDoContext);
  const [task, setTask] = useState();
  const navigate= useNavigate();
  // console.log(uuidv4())
  // console.log(state.todo())
  return (
    <div className=' p-5'>
      <h1 className='text-2xl text-center '>This is my Todo App</h1>
      <div className=' w-100 m-auto p-5'>
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }
          }
          value={task}
          type="text" placeholder='Enter your task' className='border p-3 rounded-2xl' />
        <button
          onClick={() => {
            dispatch({ type: "addTask", payload: { id: uuidv4(), task: task, }, });
            setTask(" ");
          }}
          className='bg-emerald-700 p-2 ml-2 rounded-2xl '>Add task</button>
      </div>

      <div className=' w-100 m-auto '>
        {state.todo.length > 0 ? (
          <div>
            {state.todo.map((item)=>{
              return(
            <div className="flex justify-between bg-gray-300 my-3" key={item.id}>
              <h1 className=' my-2 p-1'>{item.task}</h1>
              <div>
                <button className='bg-green-600 p-3' onClick={()=>{
                  navigate("/Edit",{state: item});
                }}> Edit</button>
                <button className='bg-red-600 p-3' onClick={()=>{ dispatch( {type: "deleteTask", payload:item.id}) ;
              } }> Delete</button>
              </div>
            </div>
            
            );
            })}
          </div>
        ) : (
          <div>No task added yet </div>
        )}
      </div>
    </div>
  );
}

export default App;
