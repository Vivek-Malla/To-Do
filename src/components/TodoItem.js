import { useDispatch } from "react-redux";
import { deletetodo,toggle } from "../Actions/action";


const TodoItem = ({todo}) => {

    const dispatch = useDispatch();
    return(
        <ul>
          <li>
          <label HtmlFor="item">
            <input className="checkbox" type="checkbox" checked={todo.completed} onChange={e => dispatch(toggle(todo.id))} id="item" />
            {todo.title}
          </label>                                      
          <button className="delete" onClick={() => dispatch(deletetodo(todo.id))}>delete</button>
          </li>
        </ul>
    )
}
export default TodoItem;