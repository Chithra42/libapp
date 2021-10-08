const express = require("express")
const booksRouter=express.Router()

var books=[
    {
        title:'The 5 Second Rule',
        author:'Mel Robbins',
        genre:'novel',
        img:"the second.jpg",
    },
    {
        title:'The Alchemist',
        author:'Paul Coelho',
        genre:'novel',
        img:'Alchemist.jpg',
    },
    {
        title:'The American Spirit',
        author:'David McCullough',
        genre:'novel',
        img:'American.jpg',
    },
    {
        title:'The Art of Happiness',
        author:'Dalai Lama and Howard C.Cutler',
        genre:'novel',
        img:'Happiness.jpg',
    }
]

booksRouter.get('/',function(req,res){
    res.render("books",{
        nav:[{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         books
    });
});
booksRouter.get('/:id',function(req,res){
    const id= req.params.id
    res.render('book',{
        nav:[{link:"/books",name:"books"},{link:"/authors",name:"authors"},{link:"/admin",name:"Add Books"},{link:"/addauthors",name:"Add Authors"}],
         title:"Library",
         book:books[id]
    })
})

module.exports = booksRouter;

