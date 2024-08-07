// // const http = require('http');
// const expressPk = require("express");

// const app = expressPk();

// app.get("/", (req, res) => {
//   res.send("Welcome Home");
// });

// app.get("/getUsers", (req, res) => {
//   res.send("Shibuzor \n ChiAmaka   \n Zahrah    \n Auwal");
// });

// const hostname = "127.0.0.1";
// const port = 3000;

// // The create server requires 2 parameters which are the  request and the response:

// // const server = http.createServer((req, res)=>{
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello, World! \n')
// // })
// /**
//  * Cereal God
//  *
//  * create endpoints to getUsers
//  * about
//  * an endpoint that will return all of the names of 3mtt users
//  */

// app.listen(port, () => {
//   console.log("Server is running on portf");
// });

// // server.listen(port, hostname, ()=>{
// //     console.log('Server runnimg at http:/127.0.0.1:3000')
// // })

//
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home My GEEE");
});

app.get("/getUsers", (req, res) => {
  const users = ["Shibuzor", "ChiAmaka", "Zahrah", "Musa"];
  res.send(users);
});

//api/todo/1
//api/todos
//api/todos


// In-memory data store
const data = [
  {id: 1, name: "John doe", age: 20, gender: "female", dob: "16/02/1999"},
  {id: 2, name: "shibuzor chi", age: 24, gender: "male", dob: "17/02/1999"},
  {id: 3, name: "Hassan Musa",  age: 24, gender: "male", dob: "18/02/1999"},
];

// Routes
//Dynamic routes

app.get("/api/users", (req, res) =>{
  res.json(data);
});


//request holds all the information of the users and the response is what is returned
app.post("/api/user", (req, res) =>{

  const user = req.body;
    console.log(user);
    const newUser = {id:data.length + 1, ...user };

    data.push(newUser);

    res.status(201).json(newUser);
  // res.send("Got your data");
})

app.post("/api/users", (req, res) =>{
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
})


app.get("/api/users/:id", (req, res)=>{
  const id = parseInt(req.params.id);
  const item = data.find((entry) => entry.id == id);

  if(!item){
      return res.status(404).json({ error : "Item not found"});
  }

  res.json(item);
})


app.patch("/api/users/:id", (req, res)=>{
  const id = parseInt(req.params.id);
  const item = data.findIndex(i => i.id === id);
  

  if(!item){
    return res.status(404).json({ error : "Item not found"});
  }

  data.splice(index, 1, {...item,...body})

  res.json(data[item]);
})



app.delete("/api/users/:id", (req, res)=>{
  const id = parseInt(req.params.id);
  
  const index = data.findIndex(i => i.id === id);
  const item = data[index];

  if(!item){
    return res.status(404).json({ error : "Item not found"});
  }
  const deletedUser = data.splice(index, 1);

  data.splice(index, 1, {...item,...body})

  res.json(data[item]);
})




app.listen(port, () => {
  console.log("Server is running on port " + port);
});