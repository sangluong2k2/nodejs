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
    console.log(req.auth)
}