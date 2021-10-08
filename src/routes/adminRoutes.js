const express = require("express")
const adminRouter=express.Router()


adminRouter.get('/',function(req,res){
    res.render("addbooks",{
        nav:[{link:"/books",name:"books"},{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         
    });
});


module.exports = adminRouter;

