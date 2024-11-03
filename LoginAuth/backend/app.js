import express from "express";
import { dbConnect } from "./db/dbconnect.js";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import User from "./db/userModel.js";
import jwt from "jsonwebtoken";
import auth from "./auth.js"

config();
const PORT = 5000;

const app = express();
dbConnect();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    user
      .save()
      .then((result) => {
        res.status(201).send({
          message: "User created Successfully",
          result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error creating user",
          error,
        });
      });
  });
});

app.post("/login", (req, res) => {
  console.log(req)
  console.log(req.body);

  User.findOne({ email: req.body.email })
    .then((user) => {
      console.log(user, "this is the real thing");
      
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          
         if(!passwordCheck){
            return res.status(400).send({
              message: "password does not match",
            })
          }

          const token = jwt.sign(
            {
              userId : user._id,
              userEmail : user.email,
            },
            "RANDOM-TOKEN", 
            { expiresIn : "24h" },
          )

          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          })
        })
        .catch((error) => {
          res.status(400).send({
            message: "Password does not match",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(404).send({
        message: "Email not found",
        error,
      });
    });
});

app.get("/free-endpoint", (req , res) => {
  res.json({message : "You are free to access me anytime"})
})

app.get("/auth-endpoint" , auth , (req , res) => {
  res.json({message : "You are authorized to access me"})
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
