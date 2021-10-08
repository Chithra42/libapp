
const express = require("express")
const app=  express()
const booksRouter = require('./src/routes/bookRoutes')
const authorsRouter = require('./src/routes/authorRoutes')
const adminRouter=require('./src/routes/adminRoutes')
const adauRouter=require('./src/routes/adauRoutes')
const signupRouter=require('./src/routes/signupRoutes')


app.use(express.static(__dirname+"/public"))
app.set('view engine','ejs')
app.set('views',__dirname+"/src/views")
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)
app.use('/admin',adminRouter)
app.use('/addauthors',adauRouter)
app.use('/signup',signupRouter)

app.get("/",function(req,res){
     res.render("index",
      {
          nav:[{link:"/books",name:"login"}],
          title:"Library",
          lin:"/books",
          signup:[{link:"/signup",name:"Signup"}]
      }
     )
  
})


app.listen(2000)



