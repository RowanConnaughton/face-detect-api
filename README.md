# Express Server for face detection app

View the live app [here](https://face-detection-app-rc.herokuapp.com/)
The live version hosted on heroku does not have session storage.

view the Frontend github repository [here](https://github.com/RowanConnaughton/face-detect-app)

Express server for [face detection app](https://github.com/RowanConnaughton/face-detect-app)

This server uses express knex and bycrpt

knex is used to connect to a postgres database and bycrpt is used to hash passwords for storage.

The API is dockerized and use's redis for storing session JWT Tokens

# Setup

Clone the repository

Add a Clarifai API key to the image controller.

Run docker-compose build to build the image.

Then run docker-compose up to run the image.

note.
I am using docker toolbox for windows.
This means that I am not able to take advantage of port forwarding.
If you are using the full docker install the API should be reachable through localhost:3000.

If you are like me and have to use docker toolbox you will need to find out the ip of the vm your container is running on.
You can find this by entering the command docker-machine ip

Then you will have to change the endpoints on the [frontend](https://github.com/RowanConnaughton/face-detect-app) accordingly.

Now the API will be ready to receive requests from the [frontend](https://github.com/RowanConnaughton/face-detect-app)
