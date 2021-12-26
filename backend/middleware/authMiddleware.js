import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async(req, res, next)=>{
  try {
    const authToken = req.headers.authorization

    if (authToken && authToken.startsWith('Bearer')){
      const tokenArray= authToken.split(' ')
      jwt.verify(tokenArray[1], process.env.JWT_SECRET, (err, decoded)=>{
        req.user = decoded  //req.user.id is available 
        next()
      })
    } else {
      res.status(401).json({
        message: "UnAuthorized User"
      })
    }
  } catch (error) {
    console.error(error)
    res.status(401).json({
      message: 'catched UnAuthorized, token failed',
      errorMessage: process.env.NODE_ENV==='production'? null : error
    })
  }
}

export {protect}
