const mongoose= require('mongoose')

mongoose.connect("mongodb://localhost/shelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>console.log("Successfully connected to database"))
.catch(err=> console.log("Had trouble connecting to the database"))