import User from '../models/userModel.js'


// @desc  Auth user & get Token
// @route POST /api/users/login
// @access Public
const authUser =async(req, res)=>{
  try {
    const {email, password } = req.body
    
    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))){
      res.json({
        _id: user._id,
        name: user.name,
        email:user.email,
        isAdmin: user.isAdmin,
        token: null
      })
    } else{
      res.status(401).json({message: 'Invalid Email or Password'})
    }

  } catch (error) {
    res.status(400).json({
      message: 'Invalid email or password',
      systemMessage: error
    })
  }
}

export {authUser}