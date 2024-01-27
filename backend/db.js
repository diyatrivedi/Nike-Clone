const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://NikeTailwind:NikeTailwind123@cluster0.xhknam8.mongodb.net/?retryWrites=true&w=majority"
const mongoDB = async () => {

  await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      console.log('Connected to MongoDB');
      // const fetched_data = await mongoose.connection.db.collection("items").find({}).toArray();
      // console.log('Fetched Data:', fetched_data);
      // const fetched_data=await mongoose.connection.db.collection("items");
      // fetched_data.find({}).toArray( async function(err,data){
      // const foodCategory=await mongoose.connection.db.collection("categories");

      // foodCategory.find({}).toArray(function(err,catData){
      //    if(err) console.log(err);
      //     else {
      //    global.items=data;
      //    console.log(global.items)
      // }
      // })


      // })
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
}

module.exports = mongoDB;