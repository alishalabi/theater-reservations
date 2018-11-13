var express = require('express');
var app = express();

// Stub: Index All Theaters
app.get("/theaters", (req, res) => {
  res.json({})
})

// Stub: Show One Theater By Id
app.get("/theaters/:theaterId", (req, res) => {
  res.json({})
  // Return theater details
})

// Stub: Show All Sessions
app.get("/theaters/:theaterId/sessions", (req, res) => {

})


// Stub: Show All Current Sessions
app.get("/theaters/:theaterId/sessions/current", (req, res) => {

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
