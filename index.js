const express = require("express");
const app = express();   //creates an Express application object.

const port = 8080;  //(8080 or 3000)custom servers



//Query String (req.query) "search/?fruit=apple"

// req.query in Express is used to access query string parameters 
//from the URL of an incoming HTTP request. These parameters are typically
//appended to the URL after a ? and are in the format key=value.

app.get("/search", (req, res) => {
    let {fruit} = req.query;
    if(!fruit) {
        res.send("<h1>No result found</h1>");      //can send with html tags
    }else {
        res.send(`<h2>Query string is ${fruit}</h2>`);
    }
});

//Path paramater (req.params is an object in Express that contains route parameters.) -> reading parameter in url
app.get("/ig/:username", (req, res) => {
    //destructuring username, ( key name of the property in the object(req.params))
    let {username} = req.params; 
    // OR(without destructuring) let username = req.params.username;

    res.send(`this ig belongs to ${username}`);
});


//Creating a route : ("/home") and sending a responce.
app.get("/home", (req, res) => {
    res.send("This is HOME page.");
});

// The * wildcard will match all routes, 
// regardless of whether the route is explicitly defined earlier in your code.
app.get("*", (req, res) => {
    res.send("Port 8080");
});

//-----------------------

// http://localhost:8080/   (will keep buffering)
app.use((req, res) => {
    console.log("New incoming request.");
});


app.listen(port, () => {
    console.log("Server listening to port :" ,port);
});