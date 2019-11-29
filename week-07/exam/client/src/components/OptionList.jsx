import React ,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchOptions } from '../redux/actionCreator';
import OptionItem from './OptionItem';


export default function OptionList(){
  const dispatch = useDispatch();
  const pollinfo = useSelector(state => state.reducer)

  useEffect(() => {
    dispatch(fetchOptions());
  })


  return (
    <div className = "option-list">
      <h1>{pollinfo.question}</h1>
      {pollinfo.options.map((option) => <OptionItem key = {option.id} {...option}/>)}
    </div>
  )
}