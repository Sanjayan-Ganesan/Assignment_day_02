import React from 'react';
//import './Input_2.css';
//import {v4 as uuid} from 'uuid';
//import logo from './logo.svg'
//import './App.css'
import './Todo.css'
import Todos from './Todos';

function Todo() {
  const[query,setvalue] = React.useState("");
const[task,settask] = React.useState([]);


const handlechange = (e)=>{
  //const{value} = e.target
  setvalue(e.target.value);
  //console.log(e.target.value);
      };

      const handleclick = ()=>{
        const  payload = {
             title:query,
             
             id:Math.random() * (25 - 0) + 0,
     };
     
     
     
     
     
     let new_Task = [payload,...task];
     settask(new_Task);
     };
     console.log(task);
     
     
     const delete_to_do = (index)=>{
         var new_list = task;
         new_list.splice(index,1);
         settask([...new_list])
     }
     
     
      

  return (
    <div className="App">
      
     <div id="input_box">
<input value={query}  onChange={handlechange}  placeholder='Write Something'/>
<button onClick={handleclick}>Add</button>
     </div>

     
         <div id='display'>
     {task.map((item,index) => {
 return (
    <div key={item.id}>
        <div id='boxes'>
        <Todos title={item.title}/>
        <button onClick={()=>delete_to_do(index)}>Delete</button>
        </div>
    </div>
)
            })} 
            </div>
    
      
    </div>
  )
}

export default Todo;
