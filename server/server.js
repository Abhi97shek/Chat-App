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
    from:"Abhishek",
    text:"Hi its look easy",
    createAt:123
  });
  socket.on('createMessage',(createMessage)=>
{
  console.log("Message recived");
  console.log(`From:${createMessage.from}`);
  console.log(`text:${createMessage.text}`);
});
  // socket.emit("newEmail",{
  //   from:"abhi.kumar736@gmail.com",
  //   text:"Hi Hows You?",
  //   createdAt:123
  //
  // });
  // socket.on("createEmail",(email)=>
  // {
  //   console.log("New Email",email);
  // });
  socket.on('disconnect',()=>
{
  console.log("User disconnect");
});
});

server.listen(port,()=>
{
  console.log(`Server is start at the server ${port}`);
});
