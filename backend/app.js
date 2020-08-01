const express = require("express");
// const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const subscriptionHandler = require('./subscriptionHandler')

const app = express();

app.use(
  cors({
    origin(origin, cb) {
        console.log('jkhkhj')
      cb(null, true);
    },
    credentials: true
  })
);

// app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
app.get("/subscription/:id", subscriptionHandler.sendPushNotification);

module.exports = app;