import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const DeleteButton=(props)=>{

   const handleDelete=()=>{
       axios.delete("http://localhost:8000/api/pets/"+props.id)
       .then(res=> {
           navigate("/pets")
           props.successCallback()
        })
       .catch(err=> console.log(err))
   }

    return(
        <button onClick={handleDelete}>Delete</button>
    )
}
export default DeleteButton
