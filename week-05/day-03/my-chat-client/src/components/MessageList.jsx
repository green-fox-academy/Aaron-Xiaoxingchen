import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchMessage} from '../redux/actionCreator'
import Message from './Message'

function MessageList(){
  const dispatch = useDispatch();
  const { loading, messages ,error} = useSelector(state => state.reducer);

  useEffect(()=>{
    dispatch(fetchMessage())
  })

  if(loading){
    return(<div class="lds-circle"><div></div></div>);
  }

  if(error){
    return error;
  }

  return (
    <div className = "message-list">
      {messages.map(((item)=> <Message key={item.id} {...item} />))} 
    </div>
  )

}

export default MessageList;