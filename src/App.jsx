import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vegetables',
    'Pick up kids from school'
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
