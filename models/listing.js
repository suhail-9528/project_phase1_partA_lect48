

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
  // Schema definition here

const newSchema = new mongoose.Schema({
  tittle:{
    type:String,
    require:true
  },
  discription:String,
  image:{
    type:String,
    default:"https://www.google.com/search?q=image+.jpg&rlz=1C1RXQR_enIN1065IN1065&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgYIARBFGEAyBggCEEUYOzIMCAMQIxgnGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyBggFEEUYPTIGCAYQRRg9MgYIBxBFGD3SAQgzMTg1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#vhid=ShQnriFk8AK93M&vssid=l",
    set:(v)=>v===""? "https://www.google.com/search?q=image+.jpg&rlz=1C1RXQR_enIN1065IN1065&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgYIARBFGEAyBggCEEUYOzIMCAMQIxgnGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyBggFEEUYPTIGCAYQRRg9MgYIBxBFGD3SAQgzMTg1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#vhid=ShQnriFk8AK93M&vssid=l":v
  },
  price:Number, 
  location:String,  
  country:String
});

const listing=mongoose.model("listing",newSchema);

module.exports=listing;




