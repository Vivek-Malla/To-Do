import React from "react";
import {useState, useEffect} from 'react'
import TodoList from "./components/TodoList";
import './App.css'

function App() {

    const [item, setItem] = useState(()=> {
        const localvalue = localStorage.getItem("ITEMS")
        if(localvalue == null)
        return []
        else
        return JSON.parse(localvalue)
      });

    const [todo,setTodo] = useState([]);
    
      useEffect(() => {
       localStorage.setItem("ITEMS",JSON.stringify(todo));
      }, [todo]);
    
    function submit(e){
      e.preventDefault();
      
      setTodo(todos => {
        return[
          ...todos,{
            id: Math.random(), title : item, completed: false 
          },
        ]
      })
    
    }
    
    function toggle(id,completed){
      setTodo(todos => {
        return todos.map(todo => {
          if(todo.id === id){
            return{
              ...todo,completed
            }
          }
          return todo
        })
      })
    }
    
    

    function deletetodo(id){
      setTodo(todos => {
        return todos.filter(todo => todo.id !== id)
        })
    }
    
      return (
        <>
  <div className="box-1">
        <h1>ToDo List</h1>
        <form onSubmit={submit}>
          <input className="textbox" type="textbox" value={item} onChange={e => setItem(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
        <h1>Items</h1>
    {/* <div className="task">
      {todo.map (todo => {  
      return(
        <ul>
          <li>
          <label HtmlFor="item">
            <input className="checkbox" type="checkbox" checked={todo.completed} onChange={e => toggle(todo.id,e.target.checked)} id="item" />
            {todo.title}
          </label>                                      
          <button className="delete" onClick={() => deletetodo(todo.id)}>delete</button>
          </li>
        </ul>
        )
      })}
    </div> */}
<TodoList todos={todo} toggle={toggle} deleteTodo={deletetodo} />
  </div>
        </>
    
      );

}

export default App;