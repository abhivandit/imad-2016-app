var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles={
    'article-one' :{
        title : ' Abhis Article',
        heading : 'my artcile',
        first : 'jhbghs'  ,
        content:`this is my file.
        sahkjhashasbkjhaj
        askjh `,
    },
    'article-two' : {
        title :' abhis second article',
        heading :'this is my world',
        first :'ajhgvas',
        content :`djknajkxdnakldjnklsajdxlkajsd
        akljhxdlasjdkljasd
        akjhdlaj`,
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var first=data.first;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
           <link href="/ui/style.css" rel="stylesheet" />
           <meta name="viewport" content="width=device-width, initial-scale=1"/>
          
    </head>
    <body>
        <div class="myfirsthtml">
        <div>
            <a href="/">Home</a>
            
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${first}
        </div>
        <div>
            ${content}
        </div>
        </div>
        
        
    </body>
</html>
`;
return htmlTemplate;
    
    
}
        
        


app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//{
 //   var articleName = req.params.articleName;
  /* res.send(createTemplate(articles[articleName]));
});*/


/*app.get('/article-three',function (req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});*/

var counter =0;
app.get('/counter',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());//number cant be send aas a response
    
    
});
var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;//we can use params too
    names.push(name);
    res.send(JSON.stringify(names));
    
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
  
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
  
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
