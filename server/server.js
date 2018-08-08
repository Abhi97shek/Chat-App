const express=require('express');
const path=require('path');
const port=process.env.PORT || 3000;

var publicPath=path.join(__dirname,'..','/public');

var server=express();

server.use(express.static(publicPath));


server.listen(port,()=>
{
  console.log(`Server is start at the server ${port}`);
});
