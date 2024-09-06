const express=require("express")
const app=express()


app.get("/",(req,res)=>{
    res.json({
        messgae:"hello docker"
    })
})

app.listen(3000,()=>{
    console.log("app is running")
})