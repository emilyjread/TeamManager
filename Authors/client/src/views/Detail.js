import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton'


const Detail=(props)=>{
   
    const [author, setAuthor]= useState("")
    const {removeFromDom}= props;
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => setAuthor(res.data[0].name))
            .catch(err=> window.location= ('/api/authors/error'))
    }, [props.id])

    return(
        <div>
            <h1>Author: {author}</h1>
            <Link className="btn" to={"/api/authors/"}>Home</Link>
            <Link className="btn" to={"/authors/" + props.id + "/edit"}>Edit</Link>
            <DeleteButton authorId={props.id} successCallback={()=>removeFromDom(author._id)}/>
        </div>
    )

}
export default Detail