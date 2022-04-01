import expressJWT from "express-jwt"

exports.checkAuth = (req, res, next) => {
    const user = true;
    if(user){
        next();
    } else {
        res.redirect('/')
    }
}

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "auth" 
});

export const isAuth = (req, res, next) => {
    console.log(req.profile);
    const user = req.profile._id == req.auth._id;
    if(!user){
        return res.status(402).json({
            message: "Bạn không được phép truy cập"
        })
    }
    next()
}

export const isAdmin = (req, res, next) => {
    if(req.profile.role == 0) {
        return res.status(401).json({
            message: "Ban khong phai la admin, chim cut"
        })
    }
    next();
} 