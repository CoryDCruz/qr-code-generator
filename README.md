# QR Code Generator Application

Web application where users can generate QR codes from urls and access a collection of all of the QR codes that they have generated. 

# User Stories
- As a user I want to be greeted with a login/signup page. 
- If I do not have an account, I want to be redirected to a signup page where I can enter in my Name, Email and password. 
- If I do have an account, I want to be able to login using my email/username and password. 
- Once logged in, I want to see a collection of all of my previously generated QR codes with a link to edit the name of the QR code and also the option to delete the QR code.
- I should also have the option to review my user account and update my username, email or password. 
- I should be able to generate a new QR code by inputting a url and receiving an automatically generated QR Code. 
- I should be able to log out once I'm finished. 

# Technologies Used
- Javascript ES6,
- HTML, CSS, Bootstrap
- node packages: express, ejs, mongoose, mongodb, qrcode, method-override, dotenv, bcrypt
# Models 
- User
  - username: String, require 
  - email: String, require
  - password: String, require, 8 char minimum
  - timestamps 
- QR Code
  - name/title: String
  - qrcode: String (link to qrcode img) 
  - timestamps
  
# Routes
- User routes
 - GET /login - render login page
 - POST /login - authenticate/login user
 - GET /signup - render signup form
 - POST /signup - create a new user
 - GET /logout - logout user
 - GET /profile - render profile show page 
 - GET /profile/edit - render profile edit page
 - PUT /profile/edit - update profile details 
 - DELETE /profile - delete user 
 
- QR Code routes
  - GET /qrcodes - render user's qrcodes (index)
  - GET /qrcodes/new - render page to generate new qrcode 
  - DELETE /qrcodes/:id - delete specific code from database
  - PUT /qrcode/:id - update qrcode details 
  - POST /qrcodes/new - create new qrcode from url and direct to qrcode show page
  - GET /qrcodes/:id/edit - render qrcodes edit page 
  - GET /qrcodes/:id - show page for specific qrcode. Options here to delete or edit       details 


# Screenshots

