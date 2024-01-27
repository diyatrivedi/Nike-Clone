import express from 'express';

const app=express();
const mongoDB=require()
const PORT=process.env.PORT;
//cors- as middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.use(express.json())

app.listen(PORT,()=>{
  console.log(`example app listenning on port ${PORT}`)
})