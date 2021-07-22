import React, {useState}from 'react'
import axios from 'axios'


const LikeButton=(props)=>{

    const [pet, setPet]=useState[props.pet]

    const handleLike=(likedPet)=>{
        const updateBody = {
            likeCount: likedPet.likeCount + 1,
          };
    
          axios
          .put(`http://localhost:8000/api/pets/${likedPet._id}`, updateBody)
          .then((res) => console.log(res.data))
          
          .catch((err) => {
            console.log(err);
          });
      };

    return(
        <button onClick={(e)=>handleLike(pet)}>Likes: {pet.likeCount}</button>
    )
}
export default LikeButton
