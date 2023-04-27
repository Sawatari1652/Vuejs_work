var mocky = require('mocky');

mocky.createServer([{
// simple GET route without request body to match
  url: '/profile',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'nickname': ''})
  }
},
{
// simple GET route without request body to match
  url: '/login',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: function(req, res, callback) {
    setTimeout(function() {
      callback(null, {
        status: 200,
        headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
        body: JSON.stringify({'nickname': ''})
      });
    }, 1000);
  }
},
{
// simple GET route without request body to match
  url: '/syoseki_list',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: function(req, res, callback) {
    setTimeout(function() {
      callback(null, {
        status: 200,
        headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
        item: JSON.stringify{
          index: 1
          title: '‚Í‚¶‚ß‚Ä‚ÌVuejs',
          author: '“c’†‘¾˜Y',
          publisher: 'SBŠ”Ž®‰ïŽÐ'
        }
      });
    }, 1000);
  }
},
{
// POST route with request body to match and respose with status, headers and body
  url: '/profile',
  method: 'post',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'status': 'ok'})
  }
},
{
// PUT route with dynamic response body
  url: '/profile',
  method: 'put',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'status': 'ok'})
  }
},
{
// DELETE route with dynamic response body
  url: '/profile',
  method: 'delete',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'status': 'ok'})
  }
}]).listen(4321);