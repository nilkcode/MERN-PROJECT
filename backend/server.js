const app = require("./app")
const dotenv = require("dotenv");

const connectDataBase = require("./config/database");
const error = require("./middleware/error");


// Handling uncaught Exceptions 
process.on("uncaughtException", (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shuting down the due to uncaught Exceptions rejection`);
    process.exit(1);
})


// config 
dotenv.config({path:"backend/config/config.env"});

// // connect to database
// console.log(youtube)

connectDataBase(); 
 
const server = app.listen(process.env.PORT, () => {
    
    console.log(`server is working on" http://localhost:${process.env.PORT}`)

})


// Unhandled Promise Rejections (which is use for url not found)
/*  so error server not crashed */

process.on('unhandledRejection',err => {
    console.log(`Error: ${err.message}`)
    console.log(`Shuting down the due to unhandled Promise rejection`);

   server.close(() => {
      process.exit(1);  
   })

});


 