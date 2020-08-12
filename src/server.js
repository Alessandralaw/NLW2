require('express')() 
.get ("/", (req, res) => {
return res.send("Hi from nlw")
})

.listen(5500)