const express=require('express');
const socketIO=require('socket.io');
const path=require('path');
const http=require('http');
const port=process.env.PORT || 3000;
var publicPath=path.join(__dirname,'..','/public');
var app=express();
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));

io.on("connection",(socket)=>
{
  console.log("new User connected");
  socket.emit('newMessage',{
    from:"Admin",
    text:"Welcome to the chat App",
    createAt:new Date().getTime()
  });
  socket.broadcast.emit('newMessage',{
    from:"Admin",
    text:"User Conneted",
    createAt:new Date().getTime()
  });

  socket.on('createMessage',(message,callback)=>
{
  console.log("Message recived",message);
  io.emit('newMessage',{
    from:message.from,
    text:message.text,
    createAt:new Date().getTime()
  });
  callback("This is from the server");
});

  socket.on('disconnect',()=>
{
  console.log("User disconnect");
});
});

server.listen(port,()=>
{
  console.log(`Server is start at the server ${port}`);
});
