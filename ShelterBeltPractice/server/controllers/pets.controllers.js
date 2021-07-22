const Pet= require('../models/pets.models')

module.exports={
    create: function(req,res){
        Pet.create(req.body)
        .then((pet)=>res.json(pet))
        .catch((err)=> res.status(400).json(err))

    },
    getAll: function(req,res){
        Pet.find({})
        .then(pets=>res.json(pets))
        .catch(err=> console.log(err))
    },

    getOne: function(req,res){
        Pet.findById({_id: req.params.id})
        .then(pet=>res.json(pet))
        .catch(err=>res.status(400).json(err))
    },

    delete: function(req,res){
        Pet.findByIdAndDelete({_id: req.params.id})
        .then(deleteConfirmation=>res.json(deleteConfirmation))
        .catch(err=>res.status(400).json(err))
    },

    edit: function(req,res){
        Pet.findByIdAndUpdate({_id: req.params.id}, req.body, 
            {
                runValidators:true,
                new:true
            })
        .then(pet=>res.json(pet))
        .catch(err=>res.status(400).json(err))
    }
}
