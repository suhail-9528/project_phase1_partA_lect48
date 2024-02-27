


const express = require("express");
const path = require("path");
const app = express();   
const port = 3000;
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname,"/public/css")))
app.use(express.static(path.join(__dirname,"/public/publicJS")));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'New_Ejs'));

app.listen(port, () => console.log("Server running on port", port));    

app.get("/chat", (req, res) => {
  res.send("hello world");
});

app.get("/number", (req, res) => {
let number=Math.floor(Math.random()*30)+2;
console.log(number)
let array = ["pappu ","kallu","janu","mamu"];
console.log(array)
  res.render('file',{number,array}); // Render file.ejs in the "New_Ejs" directory
}); 
   
app.get("/id/:username",(req,res)=>{

  let {username}=req.params;
 let instaData=require("./data.json")
 const data=instaData[username];
 
if(data){
  console.log(data);
  res.render("instagram.ejs",{username,data});
}else{
  res.render("error.ejs");
}
})
