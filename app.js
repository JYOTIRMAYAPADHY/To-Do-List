const express=require("express");
const bodyParser=require("body-parser");
const app=express();
let items=["Lunch","Snacks","Dinner"];
let workitems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extened:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
   let today=new Date();
    let options={
     weekday:"long",
     day:"numeric",
     month:"long"
   }
   let day=today.toLocaleDateString("en-US",options);
  res.render('list', {
    listTitle:day,
    newListitem:items
  });

});

app.get("/work",function(req,res){
  res.render('list',{
    listTitle:"Work List",
    newListitem:workitems
  });

});
app.get("/about", function(req,res){
  res.render("about")
});


app.post("/", function(req,res){
  let item=req.body.newItem;
  if(req.body.list==="Work"){
    workitems.push(item);
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function(){
  console.log("Server is running at port 3000");
});
