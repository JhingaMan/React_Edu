import jwt from "jsonwebtoken";

export default async function auth(req, res, next) {
  try {
    // get the token
    console.log(req.headers);
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    // check if the token mathches the supposed origin
    const decodedToken =  jwt.verify(token, "RANDOM-TOKEN");
    console.log(decodedToken, "decodedToken");
    //pass in the details of user details to logged in user
    req.user = decodedToken
    next();
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};
