import React from 'react';
import TodoEach from './TodoEach';

function TodoList(props){
  const {data, ...rest} = props;
  return(
    <div className="todo-list">
      <ul>
        {data.map(item =><li key={item.text}><TodoEach {...item}{...rest}/></li>)}
      </ul>
    </div>
  );
}

export default TodoList;