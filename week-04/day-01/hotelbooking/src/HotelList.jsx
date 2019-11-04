import React from 'react'

export default function HotelList(props){
    return(
        <div className="HotelList"> 
            <ul>
                {props.list.map(item => <li>
                <div className="content">   
                    <div className="left">
                        <h1>{item.name}</h1>
                        <img src={item.imageURL}></img>
                    </div>
                    <div className="right">
                        <p>{item.description}</p>
                        <button>Book Now!</button>
                    </div>
                </div>
                </li>)}
            </ul>
        </div>
    )
}