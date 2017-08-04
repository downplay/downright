import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static('public'));

app.listen(3311, function() {
  console.log('Examples running on http://127.0.0.1:3311')
});
