import React, { ChangeEvent, FC, useState } from "react";
import PhotoGangBanger from "../../components/About/PhotoGangBanger";
import { activePhotoGangBangers, retiredPhotoGangBangers } from "./mockdata";
import styles from "./About.module.css";
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import cn from "classnames";
import TabPanel from "../../components/TabPanel/TabPanel";
import Search from "../../components/Search/Search";

const About: FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const activeUsers = activePhotoGangBangers; //[TODO]: fetch from API
  const retiredUsers = retiredPhotoGangBangers; //[TODO]: fetch from API

  const handleTabChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newTabValue: number,
  ) => {
    setTabValue(newTabValue);
  };

  const activeGangBangers = activeUsers.map((user) => (
    <PhotoGangBanger
      name={user.name}
      image={user.image}
      position={user.position}
      email={user.email}
      key={user.name}
    />
  ));

  const retiredGangBangers = retiredUsers.map((user) => (
    <PhotoGangBanger
      name={user.name}
      image={user.image}
      position={user.position}
      email={user.email}
      key={user.name}
    />
  ));

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="about tabs"
        >
          <Tab label="Om oss" />
          <Tab label="Info" />
          <Tab label="Historie" />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <Search width={400} label="Search.." />
        <div>
          <h2>Aktive fotogjengere</h2>
          <div className={styles.gangBangers}>{activeGangBangers}</div>;
          <h2>Pensjonerte fotogjenger</h2>
          <div className={styles.gangBangers}>{retiredGangBangers}</div>;
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Box m={2}>
          <Typography gutterBottom variant="h4">
            KREDITERING
          </Typography>
          <Typography paragraph>
            Alle bilder tatt av fotogjengen skal krediteres med:
          </Typography>
          <Paper className={cn(styles.paper, styles.redBackground)}>
            <Typography>Foto: foto.samfundet.no</Typography>
          </Paper>
        </Box>
        <Box m={2}>
          <Typography gutterBottom variant="h4">
            TJENESTER OG PRISER
          </Typography>
          <Typography gutterBottom variant="h5">
            BILDER PÅ PAPIR
          </Typography>
          <Typography paragraph>
            Bestilling av bilder på papir foregår via e-post. Send en e-post til
            fg-salg@samfundet.no med følgende opplysninger:
          </Typography>
          <Paper className={cn(styles.paper, styles.blueBackground)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div>
                  <List>
                    <ListItem>
                      <ListItemText primary="Navn" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Addresse" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Postnummer og sted" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="E-post" />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <List>
                    <ListItem>
                      <ListItemText primary="Bilde" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Størrelse" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Antall" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Sendes per post eller hentes" />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Typography paragraph>
            MERK Bestillinger som gjøres etter 15.11 om høsten og 15.04 om våren
            kan ikke garanteres levering før ferien på grunn av eksamensperiode.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <div className={styles.historieWrapper}>
          <div className={styles.wrapperDots}>
            <span className={styles.dot}>
              <p>7.oktober 1958</p>
            </span>
            <span className={styles.dot}>
              <p>16.mars 1946</p>
            </span>
            <span className={styles.dot}>
              <p>..</p>
            </span>
            <span className={styles.dot}>
              <p>..</p>
            </span>
          </div>
          <div>
            <h1>Historie</h1>
            <Typography paragraph>
              Fotogjengen er en gjeng ved Studentersamfundet i Trondhjem. Vi har
              som oppgave å ta bilder av alt som skjer på Samfundet, under UKA
              og under ISFiT. Vi består av 12 fotofunksjonærer og
              webfunksjonærer. På denne siden finner du informasjon om oss og
              hvilke tjenester vi tilbyr.
            </Typography>
            <Typography paragraph>
              I Finansstyremøtet den 7. oktober 1958 ble det bestemt at
              Fotogjengen (FG) skulle være en «gjeng» i Huset, underlagt
              Finansstyret. Barnet var imidlertid nær konfirmasjonsalderen ved
              fødselen. Det første organiserte studentlynlys i Storsalen ble
              nemlig avfyrt under lørdagsmøtet 16. mars 1946. En liten gruppe
              utgått fra Studentenes Kameraklubb (S.K.) hadde fått Styrets
              tillatelse til å illustrere en reportasje fra studentlivet. Som
              Forsterkerkomiteen (FK) må også FG medgi at et avgjørende iniativ
              ble tatt av rastløse entusiaster i Akademisk Radioklubb (ARK) i en
              urtid. Så tidlig som i 1938 stiftet noen fotograferende
              amatørstudenter fra ARK Studentenes Kameraklubb, og showet var i
              gang. Men mye hadde skjedd enda tidligere. Helt tilbake til NTHs
              åpning i 1910 finnes filmmateriale, uten at det har påkalt
              nevneverdig oppmerksomhet i tidligere utgaver av
              Studentersamfundets krøniker. Dette kapitlet vil derfor favne alt
              foto- og filmarbeid utført av Samfundsmedlemmer i Samfundets regi.
              Det er naturlig å skille mellom filmarbeid og
              stillbildefotografering. Plassen tillater dessverre ingen spontane
              skildringer fra FGs liv, og bildematerialet som vises er rent
              symbolsk.
            </Typography>
            <Box>
              <Typography gutterBottom variant="h5" component="h5">
                URTIDA
              </Typography>
            </Box>
            <Typography paragraph>
              Fotograf Hilfling, senere hans sønn, Hilfling jr., var
              Studentersamfundets (og UKAs) faste fotograf fra starten i 1910
              til og med UKA-45, både av daglige og festlige begivenheter.
              Negativ-arkivet fra denne perioden er nå i forvaring ved
              Universitetsbiblioteket i Trondheim. Allerede tidlig i 30-årene
              hadde ARK innredet eget mørkerom i Huset. Til ARK søkte folk av
              alle slag, og 3. mai 1938 dannet en utbrytergruppe Studentenes
              Kameraklubb. 23.1.45 søkte de Studentersamfundet om å overta ARKs
              «to rum på klubbloftet når disse evakueres» og videre
              «Kameraklubben mener sig kompetent til som vederlag for adgang til
              lokaler å overta eventuell fotografering for Studentersamfundet.
              Slikt arbeide har allerede vært utført i mindre målestokk. En
              henviser til en bemerkning om UKA i Verdens Gang: «Det var bare
              fotograf-direktoratet som manglet...» Vi er i stand til å fylle
              dette savn». Studentersamfundet kunne imidlertid ikke ha følt
              savnet som sårt. Søknaden om lokale ble innvilget, men det ble
              ikke gjort noen avtale om fotografering. Høsten 1946 skrev
              redaktør Nic. Stabell i Under Dusken (UD) et åpent brev til S.K.
              hvor han etterlyste en kontinuerlig fotografering av begivenhetene
              i Studentersamfundet «til bruk både nå og i ettertid». Svaret fra
              S.K. var at S.K. trengte litt økonomisk støtte fra Finansstyret
              (FS) til å gjøre jobben, noe FS da ikke var villig til å yte.
              Etter søknad fikk S.K. fotograferingen ved UKA-47, en avtale
              sluttet på forretningsmessig basis. S.K. så denne oppgaven som en
              introduksjon til «et ledd i planen om en utstrakt fotografering
              med arkivering av Samfundet og Høgskolen». Dette skulle imidlertid
              ta sin tid. FS innvilget de fire medlemmene i S.K.s arbeidsutvalg
              Fotogjengen funksjonærkort f.o.m. høsten 1950. I tillegg fikk
              S.K.s arbeidsutvalg Fotogjengen disponere en kottliknende hybel.
              Mørkerom måtte lånes på Singsaker Studenthjem. Denne upraktiske
              arbeidssituasjonen fortsatte til FG ble fast gjeng. Den første
              noenlunde regelmessige fotografering og arkivering av
              Samfundsbegivenheter (utenom UKA) i FGs regi begynte våren 1950,
              men først på vårparten 1958 fikk S.K. presset FS til å nedsette et
              felles utvalg for å vurdere Fotogjengens drift og rolle i Huset.
              Og nå, etter mer enn 10 års virksomhet var tiden, eller kanskje
              heller FS, moden for å innlemme Fotogjengen som en av Husets faste
              gjenger, noe som også betød et mer ordnet forhold til UKA. FS
              påtok seg samtidig et beskjedent økonomisk ansvar som satte FG i
              stand til å holde kontinuitet i bildearkivet fra Samfundets
              arrangementer. Urtida var over.
            </Typography>
          </div>
        </div>
      </TabPanel>
    </>
  );
};

export default About;
