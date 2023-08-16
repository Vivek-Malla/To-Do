import React from "react";
import {useState, useEffect} from 'react'
import TodoList from "./components/TodoList";
import './App.css'
import { useDispatch,useSelector } from "react-redux";
import { addtodo } from "./Actions/action";

function App() {

  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

    const [item, setItem] = useState(()=> {
        const localvalue = localStorage.getItem("ITEMS")
        if(localvalue == null)
        return []
        else
        return JSON.parse(localvalue)
      });

    const [todo,setTodo] = useState([]);
    

    useEffect(() => {
      setTodo(todoState);
      localStorage.setItem('ITEMS', JSON.stringify(todoState)); 
    }, [todoState]);
    
      return (
        <>
  <div className="box-1">
        <h1>ToDo List</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addtodo(item));
          }}
        >
          <input className="textbox" type="textbox" value={item} onChange={e => setItem(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
        <h1>Items</h1>
<TodoList todos={todo} />
  </div>
        </>
      );

}

export default App;
