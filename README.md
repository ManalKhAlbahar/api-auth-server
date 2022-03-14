# api-auth-server
Work Team (Obieda Akilan , Manal Albahar)

## Overview

## Getting Started

- run the server by calling 'nodemon
- use Postman to run the server.
- get '/' (Home Route)
- /signup post request ,body, raw ,json 

      {
      "email": "email.com",
      "password": "123"  
      }  
then send.

- /signin post request ,Authorization ,Basic Auth, 

       {
      email :email.com
      password : 123  
      }  
then send.

- /users gett request ,Authorization ,Bearer Auth, 

      token ........
then send.
to get all users ,only Admain can read all users.
# Heroku Link  
https://manal-api-auth-server.herokuapp.com/users   (admin)  
https://manal-api-auth-server.herokuapp.com/signup  
https://manal-api-auth-server.herokuapp.com/signin  
https://manal-api-auth-server.herokuapp.com/users/:id  (delete)  
https://manal-api-auth-server.herokuapp.com/api/v2/foods  (post and get)



 
