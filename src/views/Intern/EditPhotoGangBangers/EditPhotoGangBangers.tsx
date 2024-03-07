import { Button, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { PhotoGangBangerApi } from '../../../utils/api/PhotoGangBangerApi';
import { PhotoGangBangerDto } from '../../../../generated';
import { AlertContext, severityEnum } from "../../../contexts/AlertContext";
import { Link } from 'react-router-dom';

export const EditPhotoGangBangers = () => {


    const { setMessage, setSeverity, setOpen } = useContext(AlertContext);

    const setError = (e: string) => {
      setOpen(true);
      setSeverity(severityEnum.ERROR);
      setMessage(e);
    };
    
    const [photoGangBangers, setPhotoGangBanger] = useState<PhotoGangBangerDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        PhotoGangBangerApi.getAllActivePangsPublic() //Skal egentlig stå getAllActivesPublic
          .then((res) => {setPhotoGangBanger(res); setIsLoading(false); })
          .catch((e) => {
            setError(e);
          });
          
      }, []);



  return (
    <div>
        <Grid container spacing={2}>
                <Grid item xs={2}><h3>Navn</h3></Grid>
                <Grid item xs={1}><h3>Adresse</h3></Grid>
                <Grid item xs={3}><h3>E-post</h3></Grid>
                <Grid item xs={2}><h3>Telefon</h3></Grid>
                <Grid item xs={1}><h3>Opptaksår</h3></Grid>
                <Grid item xs={1}><h3>Verv</h3></Grid>
                <Grid item xs={1}><h3>Rediger</h3></Grid>   
                <Grid item xs={1}><h3>Slett</h3></Grid>      
        
            {!isLoading ? photoGangBangers?.map((photoGangBanger)=>(
            <Grid container key={photoGangBanger.samfundetUser?.samfundetUserId?.id} sx={{border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'white'}}>
                <Grid item xs={2}><div>{photoGangBanger.samfundetUser?.firstName} {photoGangBanger.samfundetUser?.lastName}</div></Grid>
                <Grid item xs={1}><div>{photoGangBanger.address}</div></Grid>
                <Grid item xs={3}><div>{photoGangBanger.samfundetUser?.email?.value}</div></Grid>
                <Grid item xs={2}><div>{photoGangBanger.samfundetUser?.phoneNumber?.value}</div></Grid>
                <Grid item xs={1}><div>{photoGangBanger.semesterStart?.value}</div></Grid>
                <Grid item xs={1}><div>{photoGangBanger.position?.title}</div></Grid>
                <Grid item xs={1}><Link style={{border:"1px solid black", backgroundColor: "white", padding:"5px", borderRadius:"5px", margin: "auto", cursor: "pointer" }} to={`/intern/arkivsjef/editPhotoGangBangers/${photoGangBanger.photoGangBangerId?.id}`} >Rediger</Link></Grid>
                <Grid item xs={1}><Button variant="contained" color="secondary">Slett</Button></Grid>
              {/* TODO make a delete end point, and implement it to the page */}
                
            </Grid>
            )):(
                <Grid item xs={12}>
                    <Typography>Loading...</Typography>
                </Grid>
            )}

            
            

        </Grid>


    </div>
  )
}
