const express=require("express");
const app=express();
const port=3010;
app.get('/',(req,res)=>{
    res.end("Hello to my server");
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})