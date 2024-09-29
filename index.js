const http=require("http");
const express=require("express");

const app=express();
const server= http.createServer(app);
const {Server}= require("socket.io");

const path=require("path");

const io= new Server(server);

//socket.io
io.on('connection', (socket)=>{  //whenerver there is a connection from FE or message from client/FE socket=client info
    socket.on('user-message',(message)=>{
        io.emit("message",message); 
    });
});

app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html");
})

server.listen(9000,()=>{
    console.log(`Server is listening to PORT: 9000`);
});