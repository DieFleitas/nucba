const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "EMPTY_LIST":
      return { todos: action.payload };
    case "ADD_TODO":
      return { todos: action.payload };
    case "REMOVE_TODO":
      return { todos: action.payload };
    default:
      return state;
  }
};

export default TodoReducer;
