import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoAction,
  EmptyListAction,
  RemoveTodoAction,
} from "./actions/TodoActions";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  let { todos } = Todo;

  const handeClick = () => {
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const emptyHandler = () => {
    dispatch(EmptyListAction());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App</h2>
        <section>
          <input
            type="text"
            placeholder="Enter a to do"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={handeClick}
            style={{
              cursor: "pointer",
              padding: 12,
              borderRadius: 25,
              border: "none",
              fontSize: 15,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Add
          </button>
          <button
            onClick={emptyHandler}
            style={{
              cursor: "pointer",
              padding: 12,
              borderRadius: 25,
              border: "none",
              fontSize: 15,
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: "red",
            }}
          >
            Clear
          </button>
        </section>

        <ul className="allTodos">
          {todos?.map((t) => (
            <li key={t.id} className="singleTodo">
              <span className="todoText">{t.todo}</span>
              <button
                style={{
                  cursor: "pointer",
                  borderRadius: 25,
                  border: "none",
                  padding: 10,
                  color: "white",
                  backgroundColor: "red",
                }}
                onClick={() => removeHandler(t)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
