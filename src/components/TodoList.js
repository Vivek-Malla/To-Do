import TodoItem from './TodoItem'

const TodoList = ({todos,toggle,deletetodo,Todo}) => {
    return (
    <div className="task">
      {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggle={Todo}
            deletetodo={deletetodo}
          />
        ))}
    </div>
    )
}
export default TodoList;