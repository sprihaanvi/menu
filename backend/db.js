const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://cakeshop:thefoodiesdelight@cluster0.pphzj6y.mongodb.net/menucard?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Mongo connected");

    // Ensure the connection is established before proceeding
    const db = mongoose.connection.db;

    //connect with the database name ie cakeitems.
    const fetchdata = db.collection("cakeitems");
    const category=db.collection("cakecatg");
    const fetchorders=db.collection("orders");

    //for find : better to use async/await than callback, await finshes the find operation then return data.
    const data = await fetchdata.find({}).toArray();
    const catData=await category.find({}).toArray();
    // const user_order=await fetchorders.find({}).toArray();

    //data is stored in a global variable and endpoint se frontend ko send.
    global.cakeItem=data;
    global.category=catData;
    // global.userOrder=user_order;
    
    // console.log(global.cakeItem);
  
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectToMongo;
