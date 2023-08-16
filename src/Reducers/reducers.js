
const initial = {
    todo : [],
}

export const reducers = (state = initial,action) =>{
    switch(action.type){
        case 'ADDTODO' : 
        const todonew = {
            id : Math.random(),
            title : action.payload,
        };
        return{
            ...state,
            todo: [...state.todo,todonew],
        };
        case 'DELETETODO' : 
        return {
            ...state,
            todo: state.todo.filter((todo) => todo.id !== action.payload),
          };

          case 'TOGGLE':
            return {
              ...state,
              todo: state.todo.map((todo) =>
                todo.id === action.payload
                  ? { ...todo, completed: !todo.completed }
                  : todo
              ),
            };
    
        default:
          return state;
      }
}

