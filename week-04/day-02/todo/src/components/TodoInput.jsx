import React,{useState} from 'react';


function TodoInput(props){

  const [val, setVal] = useState('');

  function handleChange(e){
    setVal(e.target.value);
  }

  function handleAction(){
    if(val.length >= 3){
      props.onAction(val);
    }else{
      alert("Text should be at least 3 characters");
    }
  }
  

  return (
    <div className="input">
      <input value={val} onChange={handleChange}></input>
      <button className="button button-text" onClick={handleAction}>Add</button>
    </div>
  );
}

export default TodoInput