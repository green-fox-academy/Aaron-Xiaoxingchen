import React from 'react';

// export default function SecondComponent(props){
//     return <h1>{props.title}</h1>
// }

export default function SecondComponent(props){
    return(
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    );
}