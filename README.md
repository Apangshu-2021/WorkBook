# WorkBook Application

> A notebook built with the MERN stack.

This is a full stack Notebook Application built using MongoDB, Express.JS, React.JS, Node.JS

## Features

On login, the user can create, view, update as well as delete a note.One user's notes cannot be viewed by another user as this application uses jwt authentication.On signup/login the user receives a token, which contains the user's unique id,with the help of which the user's notes(if present) are fetched from the database and thus accessibe to only that particular user.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = Your Mongo DB URI [Mongo DB connection string]
JWT_SECRET = Any Secret Key

```

### Install Dependencies (frontend & backend)

```
npm install
cd backend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run both

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku
