const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 5000;

//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing.....
app.get("",(req,resp)=>{
  resp.render('index');
})

app.get("/about",(req,resp)=>{
  resp.render("about");
})

app.get("/weather",(req,resp)=>{
  resp.render('weather');
})

app.get("*",(req,resp)=>{
  resp.render('404error',{
    errorMsg: 'oops! Page Not Found'
  });
})

app.listen(port,()=>{
  console.log(`listening to the port at ${port}`)
});
