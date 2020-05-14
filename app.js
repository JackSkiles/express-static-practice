const data = require("./data")
const express = require("express");
const app = express();
const port = 8000;


// app.get("/:cat", (req, res)=> res.json(animal => animal.type == "cat"));

// app.get("/:dog", (req, res)=> res.json(animal => animal.type == "dog"));

// app.get("/:id", (req, res)=> res.json(a=>a,id == req.params.id));

// app.get("/", (req, res)=> {
//     let age = req.query.age;
//     let color = req.query.color;
//     let a = [];
//     if(age) {
//         a = data.filter(an=>an.age == age);
//     }
//     if(color){
//         a = data.filter(an=>an.color == color);
//     }
//     res.json(a);
// })


function checkIfUser(req, res, next){
    console.log('Hello Jack');
    next();
}


app.get("/", (req, res)=>res.send('Hello World!'));

app.use(checkIfUser, express.static('public'));

app.get("/legal", (req, res)=>res.send('Copyright Jack Skiles.'));


app.listen(port, ()=> console.log(`listening on port http://localhost:${port}`));