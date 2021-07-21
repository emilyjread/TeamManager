import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from '@reach/router'
import AuthorList from '../components/AuthorList'


const Main=()=>{
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author=> author._id !== authorId));
    }

    useEffect(()=>{

        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch(err=>console.log(err))
    }, [])


    return(
        <div>
            <Link to="/api/authors/new">Add an Author</Link>
            <h1>Authors:</h1>
            {loaded && <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>}
            
        </div>
    )
}

export default Main
