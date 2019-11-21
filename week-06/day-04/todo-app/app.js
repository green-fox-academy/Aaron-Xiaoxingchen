const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/static', express.static('static'))

app.use(express.json());

let store = [{
  id: 1,
  text: "Wake up",
  done: true
},
{
  id: 2,
  text: "Do some work",
  done: false
}]

app.get('/api/todos', (req, res) => {
  res.render('todo',{
    todos: store
  });
})

app.post('/api/todos', (req, res) => {
  const {id, text, done} = req.body;

  if(!text){
    res.statusCode(400);
  }else{
    const todo = {
      id, 
      text, 
      done
    }
    store.push(todo);
    res.sendStatus(201);
  }
})

app.delete('/api/todos/:id', (req, res) =>{
  const{id} = req.params;
  if(!id){
    res.statusCode(204)
  }else if{
    const index = store.findIndex((todo) => {todo.id === id})
    if(index < 0 ){
      res.statusCode(404);
    }else{
      store.filter((todo) => {todo.id !== id})
      res.send("delete successfully");
    }
  }
})

app.listen(PORT, () =>{
  console.log(`Listening on port ${PORT}`);
})