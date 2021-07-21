const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>console.log("established connection with the DB"))
.catch(err=> console.log("something went wrong connecting to the database", err))