import { Paper, FormControl, FormLabel, TextField, Button, Switch, FormControlLabel } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PhotoGangBangerDto } from '../../../../generated'
import { PhotoGangBangerApi } from '../../../utils/api/PhotoGangBangerApi'
import { AlertContext, severityEnum } from "../../../contexts/AlertContext";

export const EditPhotoGangBangersEdit = () => {

    const [photoGangBanger, setPhotoGangBanger] = useState<PhotoGangBangerDto>();
    const [address, setAddress] = useState<string | undefined>("PA MUNCHS GATE 8");
    const [email, setEmail] = useState<string | undefined>("philitb@samfundet.no");
    const [emailPosition, setEmailPosition] = useState<string | undefined>("fg-web@samfundet.no");
    const [telephon, setTelephon] = useState<string | undefined>("98810474");
    const [title, setTitle] = useState<string | undefined>("Web");
    const [pang, setPang] = useState<boolean | undefined>(true);
    const [active, setActive] = useState<boolean | undefined>(true);

    const { id } = useParams();

    const { setMessage, setSeverity, setOpen } = useContext(AlertContext);

    const setError = (e: string) => {
      setOpen(true);
      setSeverity(severityEnum.ERROR);
      setMessage(e);
    };

    useEffect(()=>{
      if (id == undefined) {
        console.log("lag feilmelding her") //TODO lag feil melding
      }else {
       PhotoGangBangerApi.getById(id)
          .then((res) => {
            console.log(res), 
            setPhotoGangBanger(res), 
            setAddress(res.address), 
            setEmail(res.samfundetUser?.email?.value), 
            setEmailPosition(res.position?.email?.value), 
            setTelephon(res.samfundetUser?.phoneNumber?.value), 
            setTitle(res.position?.title), setPang(res.isPang || false), setActive(res.isActive || false)
            
          
          },
            )
          .catch((e) => {
            setError(e);
          });} 

      
    },[])

    

    

    const handleClick = () => {
      

      editPhotoGangBanger()
      .then(() => {
        // Handle completion if needed
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });

    
    }

    const handleChangeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(active)
      setActive(event.target.checked);
    }
 
    const handleChangePang = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPang(event.target.checked);
    }

    const editPhotoGangBanger = async () => {
      // TODO change PhotoGangBanger, 
      console.log(active, pang)
      try{
        const updatedPhotoGangBanger = {
          ...photoGangBanger,
          address: address,
          samfundetUser: {
            ...photoGangBanger?.samfundetUser,
            email: {
              value: email,
            },
            phoneNumber: {
              value: telephon,
            }
          },
          position: {
            ...photoGangBanger?.position,
            title: title,
            email: {
              value: email,
            }
          },
          isActive: active,
          isPang: pang,
        };

        console.log(updatedPhotoGangBanger);
        
        setPhotoGangBanger(updatedPhotoGangBanger);
        
        await PhotoGangBangerApi.patch(updatedPhotoGangBanger);
    }
      catch (error) {
        console.log(error)
      }
      

      
    }



  return (
    //TODO add correct fields for edit photoGangBanger
    //TODO fiks utseende
    
    <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Edit {photoGangBanger?.samfundetUser?.firstName} {photoGangBanger?.samfundetUser?.lastName} bruker:</h1>
      <FormControl fullWidth margin="normal">
        <FormLabel>Address:</FormLabel>
        <TextField
          required
          fullWidth
          value={address}
          onChange={(e)=> setAddress(e.target.value)}
        />
        <FormLabel>Epost: </FormLabel>
        <TextField
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Verv Epost: </FormLabel>
        <TextField
          required
          fullWidth
          value={emailPosition}
          onChange={(e) => setEmailPosition(e.target.value)}
        />
        <FormLabel>Telefon: </FormLabel>
        <TextField
          required
          fullWidth
          type='number'
          value={telephon}
          onChange={(e)=> setTelephon(e.target.value)}
        />
        <FormLabel>Verv: </FormLabel>
        <TextField
          required
          fullWidth
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <FormControlLabel
          control={<Switch checked={pang} onChange={handleChangePang} />}
          label="Pang"
        />
        <FormControlLabel
          control={<Switch checked={active} onChange={handleChangeActive} />}
          label="Aktiv"
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleClick}
        >
          Oppdater bruker
        </Button>
        <Link to="/intern/arkivsjef/editPhotoGangBangers" 
        style={{ marginTop: "0.5rem",
          textAlign: "center",
          color: "#007bff", 
          cursor: "pointer",
          textDecoration: "none", }}>
          Tilbake til arkivsjef
        </Link>
      </FormControl>
    </Paper>

  )
}
