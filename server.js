var express = require('express');
var app = express();
const Theater = require("./models/theater")
const Session = require("./models/session")

// Stub: Index All Theaters
app.get("/theaters", (req, res) => {
  Theater.find()
    .then(theaters => {
      res.json(theaters)
    })
    .catch(err => {
      console.log(err)
    })
})

// Stub: Show One Theater By Id
app.get("/theaters/:theaterId", (req, res) => {
  Theater.findById(req.params.theaterId)
    .then(theater => {
      res.json(theater)
    })
    .catch((err) => {
      console.log(err.message)
    })
  // Return theater details
})

// Stub: Show All Sessions
app.get("/theaters/:theaterId/sessions", (req, res) => {
  Session.find({theaterId : theaterId})
    .then(sessions => {
      res.json(sessions)
    })
    .catch((err) => {
      console.log(err.message)
    })
})


// Stub: Show All Current Sessions
app.get("/theaters/:theaterId/sessions/current", (req, res) => {
  var now = new Date();
  var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  Session.find({theaterId: theaterId, })
})

// Stub: Show One Session By ID
app.get("/theaters/:theaterId/sessions/:sessionId", (req, res) => {
  // Return all reservations
})


// Stub: Show One Reservation By ID
app.get("/theaters/:theaterId/sessions/:sessionId/reservations/:reservationId", (req, res) => {

})

// Stub: Create One Reservation




app.listen(3000, () => {
  console.log('Example app listening on port 3000!'));
}
