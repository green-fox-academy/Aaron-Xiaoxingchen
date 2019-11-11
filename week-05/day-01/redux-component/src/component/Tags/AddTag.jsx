import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { addTag } from './actionCreator';

function AddTag(){
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return(
    <div>
      <h1>Add Tag</h1>
      <input value = {value} onChange = {(e) => setValue(e.target.value)}></input>
      <button onClick={() => dispatch(addTag(value))}>Add</button>
    </div>
  )
}
export default AddTag;