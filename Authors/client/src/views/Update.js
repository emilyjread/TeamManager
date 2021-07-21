import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm';

const Update=(props)=>{
    const {id}= props;
    const [author, setAuthor]= useState({});
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/'+ id)
        .then(res=>{
            setAuthor(res.data[0]);
            setLoaded(true)
        })
        .catch(err=>console.log(err))          
    }, [])

    const updateAuthor= author =>{
        
            axios.put('http://localhost:8000/api/authors/' +id, author)
            .then (res=> window.location= ('/api/authors'))
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
            {loaded &&(<AuthorForm
                onSubmitProp={updateAuthor}
                initialName={author.name}
                
            />)}
            </div>
        )
                    
}

export default Update
