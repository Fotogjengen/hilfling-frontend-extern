import React from 'react'
import { Input, TextField, Box } from '@mui/material';

const DeNyeSiden = () => {
  return (
    <div>
        <h1>DeNyeSiden</h1>
              <Box className = "text_input" >
                <TextField 
                    // error = {validCountryError}
                    id="standard-basic" 
                    label="Brukernavn"
                    variant="standard" 
                    helperText = "Skriv inn brukernavnet på alle vennene dine for å spille:)"
                    // value = {inputValue} 
                    // onChange = {handleInputChange} 
                    />
        

        {/* <button className = "submitButton"> Submit country </button> */}
        {/* {onClick = {}} */}
        </Box>
    </div>
    
  )
}

export default DeNyeSiden