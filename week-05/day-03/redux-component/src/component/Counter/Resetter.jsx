import React from 'react';
import {useDispatch} from 'react-redux'
import { resetCounter } from './actionCreator';

function Resetter(){

  const dispatch = useDispatch();

  return(
    <div>
      <h1>The Resetter</h1>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  )
}
export default Resetter;