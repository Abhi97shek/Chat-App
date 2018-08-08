var socket=io();
socket.on('connect',()=>
{
  console.log("Conneted to the server");
});
socket.on('disconnect',()=>{
  console.log("Disconnect from the server");
});

socket.on('newMessage',(newMessage)=>
  {
    console.log("Message From the Server");
    console.log(`From=${newMessage.from}`);
    console.log(`Message=${newMessage.text}`);
  });
  socket.emit('createMessage',{
    from:"Tushar",
    text:"This is only for you"
  });
// socket.emit('createEmail',{
//   from:"tushar732@gmail.com",
//   to:"abhi.kumar736@gmail.com",
//   text:"Hi I am Good"
// });
//
// socket.on('newEmail',(object)=>{
//   console.log("Mail Recieved");
//   console.log(object);
// });
