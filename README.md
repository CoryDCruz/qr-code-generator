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


# Screenshots
![image](https://user-images.githubusercontent.com/30585039/181937497-acf2bb1e-ce91-4ed8-b4f3-ff27c7c6bbb3.png)
![image](https://user-images.githubusercontent.com/30585039/181937515-d5c59c3a-e983-404e-a580-da28bdfc5d7e.png)
![image](https://user-images.githubusercontent.com/30585039/181965055-03f9a29b-0cd8-4978-bab6-aa22df962151.png)
![image](https://user-images.githubusercontent.com/30585039/181937543-4dc1de22-1264-459e-a9f9-c842ca75135b.png)
![image](https://user-images.githubusercontent.com/30585039/181937565-27990a82-0d69-4a34-ba03-5b5d2b65733b.png)
![image](https://user-images.githubusercontent.com/30585039/181937601-0354bba7-0cef-462e-b81e-16465b581bc1.png)
![image](https://user-images.githubusercontent.com/30585039/181937608-a27f0f47-a3e5-4583-af59-1fc7ca578ddb.png)
![image](https://user-images.githubusercontent.com/30585039/181937618-c0e0f3c0-8fea-4c2d-b214-e305e2450e2c.png)
![image](https://user-images.githubusercontent.com/30585039/181937625-38069113-4acf-40e4-9acc-97748c22a09b.png)







# Deployment 
Visit QRCodr: https://qrcodr.herokuapp.com/

