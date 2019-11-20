const http = require('http');
const hostname = 'localhost';
const port = 3000;
const url = require();

var movies = [
  {
    id: '12',
    title: "Forrest Gump",
    genre: "drama"
  },
  {
    id: '23',
    name: "Mission Impossible 18",
    genre: "action"
  },
]
var response = {
  movies,
}

const movieRequest = function(req, res){
  res.statusCode = response ? 200 : 400;
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response));
}


const movieRequestById = function(req, res){

    const{movieId} =req.params;
    const movie_By_ID = movies.filter((item) => item.movie_id === movieId);
    response = {
      "movies" : movie_By_ID
    }
    res.statusCode = response ? 200 : 400;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(response));
}

const movieDelete = function(req, res){

  const{movieId} = req.params;
  res.setHeader('content-type' , 'application/json');
  const index = movies.findIndex((item) => {item.movie_id === movieId})
  if(index < 0){
    res.statusCode = 400;
  }else{
    response = movies.splice(index, 1);
    res.statusCode = 200;
  }
  res.end(JSON.stringify(response));
}

const movieCreate = async function(req, res){
  
  let requestBody = '';
  req.on('data', (chunk) =>{
    requestBody += chunk;
  });
  req.on('end', () =>{
    if(requestBody === ''){
      res.statusCode = 400;
      return res.end('Bad Request');
    }
    let movie = null;
    try{
      movie = JSON.parse(requestBody);
    }catch{
      res.statusCode = 400;
      return res.end('Bad Request');
    }
    if(!movie.genre){
      movie.genre = 'unkonwn';
    }

    if(!movie.title){
      res.statusCode = 400;
      return res.end('Please input tilte');
    }

    movies.push(movie);
    res.statusCode = 201;
    return res.end('Successfully Created Movie')
  })
}

const Handeler = function(req, res){
  const reqUrl = url.parse(req.url, true);
  console.log(`${req.method} ${reqUrl.pathname}`)
  switch(`/${reqUrl.pathname.split('/')[1]}`){
    case '/' :
      res.statusCode = 200;
      res.end();
      break;
    case '/movies' :
      if(req.method === 'GET'){
        const urlToken = reqUrl.pathname.split('/');
        const movieId = parseInt(urlToken[2], 10);
        if(urlToken.length > 2){
          req.params = {
            movieId,
          }
          movieRequestById(req, res);
        }else { 
          movieRequest(req, res);
        }
      }else if(req.method === 'DELETE'){
        const urlToken = reqUrl.pathname.split('/');
        const movieId = parseInt(urlToken[2], 10);
        if(urlToken.length > 2){
          req.params = {
            movieId,
          }
          movieDelete(req, res);
        }
    }else if(req.method === 'POST'){
      movieCreate(req, res);
    }
  }
}

const server = http.createServer(Handeler);
server.listen(port, hostname, () => {
  console.log('the app is listening');
})
