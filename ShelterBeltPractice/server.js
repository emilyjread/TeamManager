const express=require('express')
const cors= require('cors')
const app= express()

require('./server/config/mongoose.config.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

require('./server/routes/pets.routes')(app)

app.listen(8000, ()=>{
    console.log("Listening at port 8000")

})
