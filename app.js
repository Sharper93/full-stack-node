// set up .. this is similar to when we use our default tags in html

// grab expree framework and store in var
const express = require("express")

// activate or tell app variable to be an express server
const app = express()

const router = express.Router()



// making an api using routes
// routes are used to handle browsers requests - look like urls - 
// diference is when a browser requests a route it is dynamically handled using  a function
// route data or route requests

// GET request when someone goes to http://localhost:3000/hello
// when using a function in a route you almost always have a parm or handle a response and request


router.get("/songs", function(req, res) {
    // create object in get request
    const song = {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
    }

    //send object to frontend as json
    res.json(song)
})

// all requests that ususally use an api start with /api...
// so the url would be localhost:3000/api/songs

app.use("/api", router)
app.listen(3000)
