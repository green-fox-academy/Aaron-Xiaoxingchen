//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   // 声明一个新的叫做 “count” 的 state 变量
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0,
    }
  }
  render(){
    const {count} = this.state;
    return(
      <div>
      <p>You clicked {count} times</p>
       <button onClick={() => this.setState({count: count+1})}>
         Click me
       </button>
     </div>
    );
  }
}

export default App;
