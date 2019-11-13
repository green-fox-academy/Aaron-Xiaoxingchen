import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import User from './User';

import {fetchUsers} from '../redux/actionCreator'

export default function UserList(){

  const dispatch = useDispatch();
  const {error, loading, users} = useSelector(state => state.reducer);

  if(loading){
    return(
    <div class="lds-circle"><div></div></div>
    )
  }

  if(error){
    return error;
  }

  return (
    <div className="users">
      {users.length ===0 && <button onClick={()=>dispatch(fetchUsers())} value = "Fetch Users"/> }
      {users.map(item => <User key ={item.id} {...item}/>)}
    </div>
  )
}