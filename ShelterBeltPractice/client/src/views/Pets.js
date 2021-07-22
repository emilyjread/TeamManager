import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

import DeleteButton from '../componenets/Delete'

const Pets=(props)=>{
const [pets,setPets]= useState([])

const removeFromDom= id=>{
    setPets(pets.filter(pets=>pets._id!==id))
}

useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
    .then(res=>{
        // const sortedPets = res.data.sort((a,b)=>{
        //     a.name
        // })
        setPets(res.data)

    })
    .catch(err=>console.log(err))
    
}, [])

const handleLike=(likedPet)=>{
    const updateBody = {
        likeCount: likedPet.likeCount + 1,
      };

      axios
      .put(`http://localhost:8000/api/pets/${likedPet._id}`, updateBody)
      .then((res) => {
        const updatedPets = pets.map((pet) => {
          if (likedPet._id === pet._id) {
            return res.data; 
          }
          return pet;
        });

        setPets(updatedPets);
      })
      .catch((err) => {
        console.log(err);
      });
  };




    return(
        <div className="list">
            <h1>Pets</h1>
            {
                pets.map((pet, i)=>{
                    return(
                        <div className="pet" key={i}>
                            <h2>{pet.name}, {pet.age}, {pet.breed}</h2>
                            <p>{pet.bio}</p>
                            <Link to={"/pets/"+pet._id}>View</Link>
                            <DeleteButton id={pet._id} successCallback={()=>removeFromDom(pet._id)}/>
                            <span onClick={(e)=>handleLike(pet)}>Likes: {pet.likeCount}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pets