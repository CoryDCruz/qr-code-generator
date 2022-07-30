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

## Wireframes: 
![Page1](https://user-images.githubusercontent.com/30585039/180101576-1a6d6a1b-ef81-48c2-b326-eec80e096e5f.jpg)
![Page2](https://user-images.githubusercontent.com/30585039/180101599-aa1d822b-58fc-4047-b55b-1479e94e1881.jpg)
![Page3](https://user-images.githubusercontent.com/30585039/180101604-cb4d6c4b-550e-45db-8e2d-d3541aa4cea4.jpg)
![Page4](https://user-images.githubusercontent.com/30585039/180101606-212cd2b2-ea6d-4287-8576-7aa0a20b5d1d.jpg)

![Page5](https://user-images.githubusercontent.com/30585039/180101610-8bcffad1-c156-425b-b0ee-e18702fe409f.jpg)![Page6](https://user-images.githubusercontent.com/30585039/180101614-14b17daf-623b-4011-8106-321c73ac7bf7.jpg)
![Page7](https://user-images.githubusercontent.com/30585039/180101617-e6b4acda-139b-468c-aad4-041cf3c94a2c.jpg)
![Page8](https://user-images.githubusercontent.com/30585039/180101619-6663c8e1-9371-4615-a66c-eb4b9d77fc93.jpg)
![Page9](https://user-images.githubusercontent.com/30585039/180101620-d21ea1c3-33a0-48b0-98ca-1a1387b8a442.jpg)


