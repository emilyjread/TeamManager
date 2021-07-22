const PetsController=require('../controllers/pets.controllers')

module.exports=(app)=>{
    app.post('/api/pets', PetsController.create)
    app.get('/api/pets', PetsController.getAll)
    app.get('/api/pets/:id', PetsController.getOne)
    app.delete('/api/pets/:id', PetsController.delete)
    app.put('/api/pets/:id', PetsController.edit)

}

