import React, { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { TodoForm } from './Components/form';
import { TodoList } from './Components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      Id: Date.now(),
      completed: false
    }

    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => 
      prev.map(todo => {
        if (todo.Id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.Id !== id))
  }

  return ( 
  <>
  
  <Navbar />
  <div className="container">
    <TodoForm onAdd={addHandler} />

    <TodoList 
      todos={todos}
      onToggle={toggleHandler}
      onRemove={removeHandler}
    />
  </div>
  </>
  )
}

export default App;
