import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void  //onToggle: (id: number) => void   (одно и тоже)
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ 
    todos,
    onToggle,
    onRemove 
}) => {
   return (
       <ul>
           {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push("completed")
                }
                
                return (
                    <li className={classes.join(" ")} key={todo.Id}>
                            <label>
                                <input 
                                type="checkbox" 
                                checked={todo.completed}                      //первый способ вызова функции
                                onChange={onToggle.bind(null, todo.Id)}     // ... = {Function.bind(null, argument)}            
                                />                                            
                                <span>{todo.title}</span> 
                                <i 
                                className="materials-icons red-text"          //второй способ
                                onClick={() => onRemove(todo.Id)}           // ... = {() => Function(argument)}                                              
                                >                                             
                                    delete
                                </i>
                            </label>
                    </li>
               )
           })}
       </ul>
   ) 
}