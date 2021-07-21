import React from 'react'
import { Link } from '@reach/router'

const Error=()=>{

    return(
        <div>
        <h1>We're sorry, we could not find the page you were looking for. </h1>
        <Link to="/api/authors">Create Author</Link>
        </div>
    )
}
export default Error