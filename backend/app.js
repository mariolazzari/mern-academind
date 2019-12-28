const express = require("express");

// express settings
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/places", require("./routes/places-routes"));

// error handler
app.use((error, req, res, next) => {
  if (res.haaderSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unknown error." });
});

// start server
app.listen(5000, () => {
  console.log("App listening on port 5000.");
});
