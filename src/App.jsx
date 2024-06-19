import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    'Get up early and study',
    'Take 15 min breaks in between',
    'Get snacks and continue studying'
  ])

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
