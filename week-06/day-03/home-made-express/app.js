const fakeExpress = require('./fake-express');
const PORT = 3000;

const app = fakeExpress();

app.listen(PORT, () => console.log(`App is running on ${PORT}`))


app.get('/my-endpoint', (req, res) => {
  // this should send an empty response with the correct status code
  //res.sendStatus();
  // this should send the response with 200, it is enough if you send only json responses
  res.send("hjkhjkh");
  // this should set the status code but doesn't send an response
  //res.status();
  // this should set a new response header
  res.set('Header-field', 'Value');
});

app.get('/my-endpoint/{pathVariable}', (req, res) => {
  // this prints the value of the path variable
  console.log(req.params.pathVariable);
  res.send();
  // this prints the query params in an object
  console.log(req.query);
  // this prints the query body in an object, it is enough if you handle only JSON body
  console.log(req.body);
});

app.static('./public');
app.static('./assets');