import React from 'react';
import RemoveIcon from './RemoveIcon';
import CheckIcon from './CheckIcon';

function TodoEach(props){
  const {text, completed} = props;
  const textStyle = completed? <del>{text}</del>:text;
  const itemClasses = `todo-item ${completed?'completed':''}`;
  const iconClasses = `icon ${completed?'icon-check':'icon-check-outline'}`;

  return(
    <div className={itemClasses}>
      {textStyle}
      <div className="item-action" >
        <RemoveIcon className="icon icon-remove" onClick={()=>props.onRemove({text, completed})}/>
        <CheckIcon check={completed?true:false} className={iconClasses} onClick={()=>props.onToggle({text, completed})}/>
      </div>
    </div>
    );
} 

export default TodoEach;