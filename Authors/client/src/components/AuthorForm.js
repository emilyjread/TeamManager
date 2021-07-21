import React, {useState} from 'react'

const AuthorForm=(props)=>{
    const {initialName, onSubmitProp}=props
    const [name, setName]= useState(initialName)

    const handleSubmit=e=>{
        e.preventDefault()
        onSubmitProp({name})

    }
    return(
        <form className="author form"  onSubmit={handleSubmit}>
            <label>Author Name: </label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    )
}

export default AuthorForm