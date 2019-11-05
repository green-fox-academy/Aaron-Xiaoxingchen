import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" render={() =><p>Hello World!</p>}/>
            <Route path="/error/:errorcode" render={({ match }) => (<p>Error:{match.params.errorcode}</p>)}/>
            <Route path="/error" render={() => <p>Something Bad happend!</p>}/>
            <Route render={() => <p>This page is not implemented yet</p>} />
          </Switch>
        </main>
      </Router>
    );
  
}


export default App;