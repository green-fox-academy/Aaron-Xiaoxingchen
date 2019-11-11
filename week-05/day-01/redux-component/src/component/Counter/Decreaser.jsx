import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decreaseCounter } from './actionCreator';

function Decreaser(){

  const counter = useSelector(state => state.calculator);
  const dispatch = useDispatch();

  return(
    <>
      <h1>The Decreaser</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </>
  )
}
export default Decreaser;