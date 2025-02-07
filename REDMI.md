#welcome to flights  service


##project setup
--clone the project on ur local machine

--execute 'npm install' on the same path as of ur root directory of the download project 
-- create a dotenv file in the root directory and add the following environment variable.
--'PORT=8080'
--inside the src/config' folder create a new file 'config.json' and then add the following piece of json




{
  "development": {
    "username": <your_db_login_name>,
    "password": <your_db_password>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

-once you have added ur db config as listed above ,
go thr src folder from ur terminal and execute 'npm sequelize db:create'


##db design 
--airplane table
--flight 
--airport
--city 


--a flight belongs to an airoplane but one aeroplane can be used in multiple flights
--a city has many but one airport belongs to a city
--one airpoet has many flights but a flights belongs to a one airport


##flight table 

--id----unique 