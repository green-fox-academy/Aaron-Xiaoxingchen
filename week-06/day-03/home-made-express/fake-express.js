let http = require('http');
let url = require('url');

function createApplication(){
  let app = (req, res) => {
    let getMethods = req.method.toLowerCase();
    let {pathname} = url.parse(req.url, true);

    for(let i = 0; i < app.routes.length; i++){
      let {method, path, handler} = app.routes[i];
      if((method === getMethods || method === 'all') && (path === pathname || path === '*')){
        handler(req, res);
      }
    }
    res.end(`Cannot ${getMethods} ${pathname}`)
  }
  app.routes = [];

  app.all = function(path, handler){
    let layer = {
      method: 'all',
      path,
      handler
    }
    app.routes.push(layer);
  }
  http.METHODS.forEach(method => {
    method = method.toLocaleLowerCase();
    app[method] = function(path, handler){
      let layer = {
        method,
        path,
        handler
      }
      app.routes.push(layer);
    }
  })

  app.get = function(path, handler){
    let layer = {
      method : 'get',
      path,
      handler
    }
    app.routes.push(layer);
  }

  app.listen = function(){
    let server = http.createServer(app);
    server.listen(...arguments);
  }
  return app;
}

module.exports = createApplication;