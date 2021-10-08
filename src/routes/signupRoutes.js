const express = require("express")
const signupRouter=express.Router()


signupRouter.get('/',function(req,res){
    res.render("signup",{
     nav:[{link:"/books",name:"books"},{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         signup:[{link:"/",name:"Signup"}]
    });
});


module.exports = signupRouter;

