# QR Code Generator Application

Web application where users can generate QR codes from urls and access a collection of all of the QR codes that they have generated. 

# User Stories
- As a user I want to be greeted with a login/signup page when I first access the app. 
- If I do not have an account, I want to be be able to access a signup page where I can enter in a Username, Email and Password to create an account, then automatically be signed into my newly created account. 
- If I do have an account, I want to be able to login using my email/username and password. 
- Once logged in, I want to see a collection of all of my previously generated QR codes with a link to edit the details of the QR code and also the option to delete the QR code.
- I should also have the option to review my user profile and update my email or password. 
- I should be able to generate a new QR code by inputting a url and receiving an automatically generated QR Code. 
- I should be able to log out once I'm finished. 

# Technologies Used
- Javascript ES6,
- HTML, CSS, Bootstrap, Bootswatch Theme
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
  - GET /qrcodes/:id - show page for specific qrcode. Options here to delete or edit details 


# Screenshots
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/30585039/181937171-ba0bde98-0429-4ff2-9c23-78f975177922.png">
<img width="1431" alt="image" src="https://user-images.githubusercontent.com/30585039/181937176-e04a5640-1919-4fe9-94ce-56a0e5f2ac94.png">
<img width="1431" alt="image" src="https://user-images.githubusercontent.com/30585039/181937203-bcf0e20b-6fa7-4f65-81e4-17f70e81f9d8.png">
<img width="1438" alt="image" src="https://user-images.githubusercontent.com/30585039/181937212-b9b4b642-57ab-45e0-9997-cf14d8cf7ca0.png">
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/30585039/181937223-9c0c0f8e-3bd5-4353-8e35-b828e3fb3da6.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/30585039/181937235-aab7430f-5843-4f60-b272-fa12992219ce.png">
<img width="1439" alt="image" src="https://user-images.githubusercontent.com/30585039/181937241-e2548407-56d1-4574-b60e-1a8d31647979.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/30585039/181937247-a4161981-9d86-40dd-bf8b-f507e183f10c.png">





# Deployment 
Visit QRCodr: https://qrcodr.herokuapp.com/

