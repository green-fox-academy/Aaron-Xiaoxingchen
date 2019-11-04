import React from 'react';

export default function HotelFilter(props){
  return (
    <div className= "HotelFilter">
      <h1>{props.title}</h1>
        <ul>
          {props.list.map(item => <li><input type="checkbox" defaultChecked={item.checked}/> {item.name}</li>)}
				</ul>
    </div>
  )
}