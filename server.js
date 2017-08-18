var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'Article-one | Shreyas Myana',
    heading: 'article one',
    date:'july 30',
    content:`  <div>
            <p>This is article one. This is article one. This is article one</p>
            <p>This is article one. This is article one. This is article one</p>
            <p>This is article one. This is article one. This is article one</p>
            </div> `
};
function create(data)
{
var title =data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var template =
    `<html>
<head>
    <title> ${heading}  </title>    
</head>
    <body>
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div> ${date}</div>
        <div>
            ${content}
            </div>
    </body>    
</html>
`;
 return template;   
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
  res.send(create(articleone));    
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-two', function(req, res){
   res.send('This is article two'); 
});
app.get('/aricle-three',function(req,res){
    res.send('this is article three');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
