
const express = require('express')
const server = express()
const nunjucks = require('nunjucks');
 
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
 const proffys= [

 ]
const subjects = [

]
const weekdays = [

]

function pageLanding(req, res) {
  const filters = re,query
  return res.render("index.html")
}
function pageStudy(req, res) { 
  const filters = req,query
  return res.render("study.html", { proffys, filters, subjects, weekdays})

}
function pageGiveClasses(req,res) {
  const dados = req.query

console.log(dados)
return res.render("give-classes.html", {subjects, weekdays})

const express = require('express')
const server = express()






.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req,res) => {
return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req,res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
    })

.listen(5500)