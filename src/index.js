const express = require("express");

const { PORT } = require('./config/serverConfig')

console.log(`PORT value: ${PORT}`)

const setupAndStartServer = async ()=>{


  //  create the express object
  const app = express();



  app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
   
    
    
  })

}

setupAndStartServer()