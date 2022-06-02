const express       = require("express")
const path          = require("path")
const hbs           = require("hbs")
const fs            = require('fs')


const app = express()

//Define Parth of Directory
const publicDirectory   = path.join(__dirname,"../public")
const viewsPath         = path.join(__dirname,"../templates/views")
const partialsPath      = path.join(__dirname,"../templates/partials")

//Setup handlebar engine and views
app.set("view engine","hbs")
app.set("views",viewsPath)

// register all partials
hbs.registerPartials( partialsPath)

//Set up the static file on public folder
app.use(express.static(publicDirectory))

app.get("",(req,res) => {
    res.render("index", {
        title: "Weather app",
        name : "Leonardo",
        navbarTitle : {
            Home : "/home",
            About: "/about",
            Help : "/help"
        }
    })
})

app.get("/about",(req,res) => {
    res.render("about",{
        title: "About",
    })
})

app.get("/help",(req,res) => {
    res.render("help",{
        title: "Help",
    })
})

app.get("*",(req,res) => {
    res.render("404", {
        title:'404'
    })
})






// Server
app.listen(3000,() => {
    console.log('Run on http://localhost:3000')
})