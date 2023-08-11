const TodoItem = ({todo,toggle,deletetodo}) => {
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
}
export default TodoItem;