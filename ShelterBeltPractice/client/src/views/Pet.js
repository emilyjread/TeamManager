import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DeleteButton from '../componenets/Delete'
import { Link } from '@reach/router'


const Pets=(props)=>{
const [pet,setPet]= useState({})


useEffect(() => {
    axios.get("http://localhost:8000/api/pets/"+props.id)
    .then(res=>{
        // const sortedPets = res.data.sort((a,b)=>{
        //     a.name
        // })
        setPet(res.data)

    })
    .catch(err=>console.log(err))
    
}, [])



    return(
        <div className="pet">
            <h1>{pet.name}</h1>
            <p>Age: {pet.age}</p>
            <p>Breed:{pet.breed}</p>
            <p>Bio: {pet.bio}</p>
            <p>Likes: {pet.likeCount}</p>
            <DeleteButton id={pet._id}/>
            <Link to={"/pets/"+ pet._id+ "/edit"} className="update">Update</Link>
            
        </div>
    )
}

export default Pets