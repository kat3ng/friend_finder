// LOAD DATA


const friendData = require("../data/friends");


// ROUTING
module.exports = (app) => {

    // API GET Requests
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // API POST Requests

    app.post("/api/friends", (req, res) => {
        console.log(req.body);
        friendData.push(req.body);
    });


    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};