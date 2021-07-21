import React, {useState, useEffect} from 'react'
import axios from "axios"
import AuthorForm from '../components/AuthorForm'

const New = ()=>{
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState([]); 

    const createAuthor = author =>{
        axios.post('http://localhost:8000/api/authors', author)
        .then(res=>{
            setAuthors([...authors, res.data]);
            window.location= ('/api/authors')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })       
    }

    return(
        <div>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
            
        </div>
    )

}

export default New