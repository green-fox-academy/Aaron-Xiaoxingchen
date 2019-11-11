import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const defaultTodos = [
  'Wake up',
  'Do some work',
  'Make slides for demo',
  'Prepare for demo',
  'Rehearse',
  'Nail it'
]

function Todo(props){

  const [todos, setTodos] = useState(defaultTodos.map(item=>({text:item, completed:false})));
  const theme = props.match.params.value;

  useEffect(() =>{
    document.body.classList.add(`theme-${theme}`);
    return () => document.body.classList.remove(`theme-${theme}`);
  })

  function handleAction(text){
    if(text !== ''&& !todos.map((item)=>item.text).includes(text)){
      addTodo(text);
    }
    else{
      alert(`'${text}' has already exist`);
    }
  }

  function addTodo(text){
    setTodos([...todos,{text, completed:false}])
  }

  function removeTodo(done){
    setTodos(todos.filter(item => item.text !== done.text))
  }
  
  function toggleTodo(todo){
    setTodos(
      todos.map((item) =>{
        if(item.text === todo.text){
          item.completed = !item.completed;
        }
        return item;
      })
    )
  }

  return(
    <>
      <h1 className = "heading">TODOs</h1>
      <TodoInput onAction={handleAction}/>
      <TodoList data={todos} onRemove={removeTodo} onToggle={toggleTodo}/>
      <Link to="/themes" className="Link-text">Theme Switcher</Link>
    </>
  )
}

export default Todo