# DeakinSocial
A Deakin university specific social media web app for networking and connecting with other people.

## Dockerize
docker build -t username/projectname .  
docker run -p 3000:3000 imageid

## App
We'll be using the following as our file structure:
app/
--controllers/
--public/
--routes/
--services/
--views
--server.js

### controllers/
Will contain our logic controllers, called upon by our route handling.

### public/
Will contain html and other assets.

### routes/
Will contain route request handling.

### services/
Will contain our db CRUD functions, called upon by our controllers.

### server.js
Server launch file. Initializes the db, sets the application to listen, and defines our initial routes.

### views
Contains our pug view files.
