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
          .then((res) => {console.log(res), 
            setPhotoGangBanger(res), 
            setAddress(res.address), 
            setEmail(res.samfundetUser?.email?.value), 
            setEmailPosition(res.position?.email?.value), 
            setTelephon(res.samfundetUser?.phoneNumber?.value), 
            setTitle(res.position?.title), setPang(res.pang || false), setActive(res.active || false)},
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
      setActive(event.target.checked);
    }
 
    const handleChangePang = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPang(event.target.checked);
    }

    const editPhotoGangBanger = async () => {
      // TODO change PhotoGangBanger, 
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
          active: active,
          pang: pang,
        };
        
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
    <Paper>
      <h1>{photoGangBanger?.samfundetUser?.firstName} {photoGangBanger?.samfundetUser?.lastName}:</h1>
      <FormControl >
        <FormLabel>Address:</FormLabel>
        <TextField
          required
          value={address}
          onChange={(e)=> setAddress(e.target.value)}
        />

        <FormLabel>Epost: </FormLabel>
        <TextField
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>Verv epost: </FormLabel>
        <TextField
          required
          value={emailPosition}
          onChange={(e) => setEmailPosition(e.target.value)}
        />
        

        <FormLabel>Telefon: </FormLabel>
        <TextField
          required
          type='number'
          value={telephon}
          onChange={(e)=> setTelephon(e.target.value)}
        />

        <FormLabel>Verv: </FormLabel>
        <TextField
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />

        <FormLabel>Pang: </FormLabel>
        <Switch checked={pang} onChange={handleChangePang}/>

    
        <FormLabel>Aktiv: </FormLabel>
        <Switch checked={active} onChange={handleChangeActive}/>

        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{marginTop:"5px", margin:"5px auto"}}
          onClick={handleClick}
        >
          Oppdater bruker
        </Button>

        <Link to="/intern/arkivsjef/editPhotoGangBangers" >
          Tilbake til arkivsjef
        </Link>
      </FormControl>
    </Paper>
  )
}
