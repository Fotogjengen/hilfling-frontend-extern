import { Paper, FormControl, FormLabel, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const EditPhotoGangBangersEdit = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephon, setTelephon] = useState("");
    const [admissionyear, setAdmissionyear] = useState("");
    const [position, setPosition] = useState("");



  return (
    <Paper>
      <FormControl >
        <FormLabel>Navn:</FormLabel>
        <TextField
          required
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />

        <FormLabel>Epost: </FormLabel>
        <TextField
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>Telefon: </FormLabel>
        <TextField
          type="password"
          required
          value={telephon}
          onChange={(e)=> setTelephon(e.target.value)}
        />

        <FormLabel>Opptaksår: </FormLabel>
        <TextField
          type="password"
          required
          value={admissionyear}
          onChange={(e)=> setAdmissionyear(e.target.value)}
        />

        <FormLabel>Verv: </FormLabel>
        <TextField
          type="password"
          required
          value={position}
          onChange={(e)=> setPosition(e.target.value)}
        />


        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{marginTop:"5px", margin:"5px auto"}}
        >
          Lag bruker
        </Button>

        <Link to="/intern/arkivsjef" >
          Tilbake til arkivsjef
        </Link>
      </FormControl>
    </Paper>
  )
}
