import React, {useState, useEffect} from 'react'
import { Link} from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList=(props)=>{

    const removeFromDom= authorId=>{
        props.setAuthors(props.authors.filter(authors=>authors._id!==authorId))
    }

    return(
        <div>
           {props.authors.map((author, idx)=>{
               return (
               <div className="author" key={idx}>
                   <p>{author.name}</p>
                   <Link className="btn" to={`/api/authors/${author._id}`} >Go </Link>
                    <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
               </div>
               
               )          
           })}
        </div>
    )

}

export default AuthorList