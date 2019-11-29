import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
//import VoteItem from './VoteItem';
import { fetchOptions } from '../redux/actionCreator';

export default function Vote(){
  const dispatch = useDispatch();
  const pollinfo = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(fetchOptions());
  })

  return (
    <>
        <form className = "vote"> 
            {pollinfo.options.map((option) => <label key= {option.id}><input type = "radio" />{option.name}</label>)}
          <input 
            type= "submit" 
            value = "Submit">
          </input>
        </form>
      </>
  )
}