const express = require("express")
const authorsRouter=express.Router()

var authors=[
    {
      
        title:'Kamala Das',
        author:'India',
        genre:'Ente Kadha, The Descendants',
        img:'Kamala Das.jpg',
    },
    {
        title:' Paulo Coelho',
        author:'Brazil',
        genre:'The Alchemist, The Pilgrimage, The Journeys ',
        img:'paulo coelho.jpg',
    },
    {
        title:'David McCullough',
        author:'American',
        genre:'The American Spirit, The Path Between the Seas',
        img:'david mccullough.jpg',
    },
    {
        title:'Mel Robbins',
        author:'American',
        genre:'The 5 Second Rule,  Stop Saying You are Fine ',
        img:"mel robbins.jpg",
 
    }
]

authorsRouter.get('/',function(req,res){
    res.render("authors",{
        nav:[{link:"/books",name:"books"},{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         authors
    });
});
authorsRouter.get('/:id',function(req,res){
    const id= req.params.id
    res.render('author',{
        nav:[{link:"/books",name:"books"},{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         author:authors[id]
    })
})

module.exports = authorsRouter;

