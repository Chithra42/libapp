const express = require("express")
const adauRouter=express.Router()


adauRouter.get('/',function(req,res){
    res.render("addauthors",{
        nav:[{link:"/books",name:"books"},{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         
    });
});


module.exports = adauRouter;
