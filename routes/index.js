var express = require("express"),
  router = express.Router(),
  marc = require("./marcoPolo.js");

router.get("/getMarcoPoloGame", function(req, res) {
  marc.getGameResult(function(data) {
    // console.log("getGameResultResponse is - " + JSON.stringify(getGameResultResponse));
    res.send(data);
  });
});

module.exports = router;
