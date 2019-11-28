import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import PostList from './components/Post/PostList';
import {Provider} from 'react-redux';
import store from './store'
import Footer from './components/Header/Footer';
import CreatePost from './components/Post/CreatePost'

function App() {
  return (
    <Provider store = {store}>
      <div className = "App">
        <Footer/>
        <Router>
          <main>
            <Route exact path="/" component={PostList}/>
            <Route path = "/submit" component={CreatePost}/>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
