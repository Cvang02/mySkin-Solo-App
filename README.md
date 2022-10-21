# Project Title : $(mySkin) - (bling - my - skin)

(Bling) $(mySkin) app lets you keep track of your skin care process through the means of taking and uploading pictures of your face profile. This will let you see a series of photo timeline of your skin condition and if the skincare products you are currently using are working or not. You also have the option to add any skincare product that you are currently using, have used in the past or are looking to use in the future into a list of products in its own section page. This is to help you keep track of your skincare product to let you determine if the product is worth keeping or scraping it.

# Prerequisites :

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

# Getting Started :

- Fork and Clone Repositories.
- Create Database in Postico(postgreSQL) and name database as solo_project_data. (Database name can be change in server/modules/pool.js)
  The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
- Open up your editor of choice and run an npm install. (npm install) (A full list of dependencies can be found in `package.json`)
- Run, npm run server and npm run client in your terminal. Both server and client must be running at the same time. NPM run client will       
  automatically open a new web browser tab for you. If no new browser were open, go to your localhost:3000 or localhost:5000.
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

- Cloudinary was used for this project. Cloudinary is a free api uploading services that lets you upload your photo on your computer and into their cloud service. Please go and create a free acount. (https://cloudinary.com). Once you create your account, in the same .env file, paste these line into the file: 
 ```
CLOUDINARY_NAME = (Your own Cloudinary name)
CLOUDINARY_API_KEY = (Your own Cloudinary API Key)
CLOUDINARY_API_SECRET = (Your own Cloudinary API Secret)
  ```
You can find your cloudinary information on the website and copy and paste them according to each line. Please keep your cloudinary API key to yourself, do not share it to anyone. In Cloudinary, you'll have to setup your upload presets according to your liking in the settings page. The name of your upload presents is very important as it has to match with your routes. (These are the name files that I have setup for this project, (profile_image_url), (post_feed), (product_feed), these names can be change. Please look at each server/routes page to change the name)

# Running the App :

Once you have everything setup and running. Follow these instruction on how to use the app. 

- In the Home page, you will have to register an account. If you already have an account, please login instead. 
- To register an account, all required information must be entered, a username, password and email, first name, last name and profile image. (When adding profile image, please hit "add photo" first before clicking register). This will not work if you do not add profile image first.
- When your account has been created, you will be taken to the home page. In the home page, you have the option to start adding a new post or you can use the navigation bar to navigate to other pages. 
- In the home page, to upload a photo, click on the camera icon and it should take you to another page where you can choose your photo file and add a description. Hit 'add post" and it will take you back to the home page and you should see your photo there. (If photo does not show up instantly, please give it a few second or refesh page.) Each post you have the option to delete or edit it by clicking on the down arrow. 
- To go and look at your skincare product list, use navigation bar on the top left. Similar to adding a post, the product page will have the same functionality. Click on camera icon and fill in the required product information to add it to your list. You have the option to delete and edit each skincare product added. 
- In the profile page, it will show you your inforamtion of username, email, first name, and last name. You will have the option to change these information by clicking on the edit icon next to the "Profile" heading. Please note that password change has not yet been incorporated into this project at this time, so please keep you password safe where you can remember it. 
- Inforamtion page is intended to have the same information as the README.md.
- About page is a description of what the app is. 
- To logout, click on the logout icon on the top right corner.  

Thank you and please enjoy this app. 

# Build With :

- This app was built with: 
  - Axios
  - Bcryptjs
  - Dotenv
  - Luxon
  - Material UI
  - Passport
  - PG
  - React
  - Redux - Saga
  - Sweetalert2
  
Please read `package.json` for the full list of dependencies.

# Acknowledgement 

- Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 
- Thanks to everyone in the L'engle cohort who supported and help me with this project.
- Thanks to my family and friends with daily support. 

# Support 

If you have any suggestions or issues, please email me at chameng.vang@outlook.com

