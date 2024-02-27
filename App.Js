
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing=require("./models/listing.js");
const data=require("./initiliazation/init.js");
const path=require("path")

const port=3000;
const mongo_url="mongodb://127.0.0.1:27017/test"

app.listen(port,()=>console.log("you port success : ",port));

app.get("/",(req,res)=>{
  res.send("<h1>are rougt on success</h1>")
});

app.get("/AllListng",(req,res)=>{

// Assuming 'listing' is a Mongoose model
//  con Assuming 'listing' is a Mongoose model
const SampleListing = new listing({
  title: "home to very nice", // Fixed typo
  description: "my new vallia", // Corrected typo
  price: 4732,
  location: "colcatta,goa",
  country: "India",
}); 

// Assuming this is within an async function or a route handler
SampleListing.save()
  .then(savedListing => {
    console.log("Sample was saved:", savedListing);
    res.send("Success: Sample Listing saved");
  })
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send("Error saving sampleListing");
  });

});

app.get("/id/:username",(res,req)=>{
   let {username}=req.params;
   console.log(username.TypeError);
   res.send("sample data was success!");
   
// data.save().then((res)=>console.log(res,"response was click")).catch((err)=>console.log(err.TypeError,"data not was save"));

});

  async function main(){
  await mongoose.connect(mongo_url)
};
main().then((res)=>console.log("mongo DB was success"));



app.get("*",(req,res)=>{
  console.log("no error");
  res.send("No Such Account!")
})