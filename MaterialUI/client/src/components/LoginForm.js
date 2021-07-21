import React from 'react'
import { Paper, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core'

const styles = {
    paper:{
        width:"20rem", padding:"1rem"
    }, 
    input:{
        marginBottom:"1rem"
    },
    button:{
        width:"100%"
    }
}

const LoginForm=()=>{
    return(
        <Paper elevation={3} style={styles.paper}>
            <h2> Login Form</h2>
            <form>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>UserName:</InputLabel>
                    <OutlinedInput type="text"></OutlinedInput> 
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Email: </InputLabel>
                    <OutlinedInput type="email"></OutlinedInput> 
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"></OutlinedInput> 
                </FormControl>
                <Button type="submit" variant="contained" color="primary" style={styles.button}>Register</Button>
            </form>
        </Paper>
    )
}

export default LoginForm
