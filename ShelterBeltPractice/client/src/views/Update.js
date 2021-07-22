import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'


const Update=(props)=>{
    const [name, setName]= useState("")
    const [age, setAge]= useState(0)
    const [breed, setBreed]= useState("")
    const [bio, setBio]= useState("")

    const [errors, setErrors]= useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+props.id)
        .then(res=> {
            setName(res.data.name)
            setAge(res.data.age)
            setBreed(res.data.breed)
            setBio(res.data.bio)
        })
        .catch(err=> console.log(err))
        
        
    }, [])

    const handleSubmit=(e)=>{
        e.preventDefault()

        const editedPet={
            name: name, 
            age: age, 
            breed: breed,
            bio: bio
        }

        axios.put("http://localhost:8000/api/pets/"+ props.id, editedPet)
        .then(res=>{navigate("/pets/"+ res.data._id)})
        .catch((err)=>{
            console.log(err);
            setErrors(err.response?.data?.errors);
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" value={name}></input>
            {errors?.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
            <label>Age</label>
            <input onChange={(e)=>setAge(e.target.value)}  type="number" value={age}></input>
            {errors?.age && (
                <span style={{ color: "red" }}>{errors.age.message}</span>
            )}
            <label>Breed</label>
            <input onChange={(e)=>setBreed(e.target.value)} type="text" value={breed}></input>
            {errors?.breed && (
                <span style={{ color: "red" }}>{errors.breed.message}</span>
            )}
            <label>Bio</label>
            <input onChange={(e)=>setBio(e.target.value)} type="textarea" value={bio}></input>

            <input type="submit" value="Create Pet"></input>
        </form>
    )
}

export default Update

