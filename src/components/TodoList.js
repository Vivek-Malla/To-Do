import TodoItem from './TodoItem'

const TodoList = ({todos,toggle,deleteTodo,Todo}) => {
    return (
    <div className="task">
      {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggle={Todo}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
    )
}
export default TodoList;