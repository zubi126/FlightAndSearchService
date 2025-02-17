const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


console.log(`PORT value: ${PORT}`)


// const  {City, Airport} =require('./models/index');
// const { Model, where } = require("sequelize");
const db = require('./models/index')
const {Airplane} = require('./models/index')



const setupAndStartServer = async ()=>{


  //  create the express object
  const app = express();


  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',ApiRoutes)





  app.listen(PORT, async ()=>{

    console.log(`server started at port ${PORT}`);
    
    if(process.env.SYNC_DB){
      db.sequelize.sync({alter: true})
    }





// const city = await City.findOne({
//   where: {
//     id: 1
//   }
// });


// const airports= await city.getAirports();



// const newAirport = await Airport.findOne({
//  where: {
//   id: 6
//  }
// })



// await city.addAirport(newAirport);
// await city.addAirport({
//   name: 'rajiv gandhi Airport'
// })
// console.log(city,airports);




// we can diectly create a airplane 

// await Airplane.create({
//   modelNumber: 'Bombardier CRJ'
// });






  })

}

setupAndStartServer()