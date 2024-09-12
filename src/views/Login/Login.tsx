import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { CloseSharp, Visibility, VisibilityOff } from "@mui/icons-material";

interface Props {
  setLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setLoginForm }: Props) => {
  const [husfolk, setHusfolk] = useState(false);
  const [power, setPower] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated, setPosition } = useContext(AuthenticationContext);
  //const [exists, setExist] = useState(true);
  //check authority
  //change authority

  // const handleSubmitHusfolk = () => {
  //   //check if user exists
  //   //if user exists change authenticated

  //   if (exists) {
  //     //placeholder
  //     setIsAuthenticated(true);
  //     setPosition("FG"); //send in the specific posistion that the user has
  //     setLoginForm(false);
  //   }
  // };

  // const handleSubmitPower = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setIsAuthenticated(true);
  //   setPosition("PROFILE"); //send in the specific posistion that the user has
  //   setLoginForm(false);
  // };

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <Grid container>
          <Grid item xs={5}>
            <Button
              className={styles.gridItem}
              onClick={() => {
                setPower(true), setHusfolk(false);
              }}
            >
              Login PowerBruker
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              className={styles.gridItem}
              onClick={() => {
                setHusfolk(true), setPower(false);
              }}
            >
              Login Husfolk
            </Button>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              onClick={() => setLoginForm(false)}
              className={styles.gridItem}
            >
              <CloseSharp />
            </IconButton>
          </Grid>
        </Grid>

        {husfolk && (
          <Grid item xs={12} className={styles.gridItem}>
            <h3>Login husfolk</h3>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <TextField
                id="standard-username"
                label="Username"
                type="text"
                variant="standard"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              onClick={() => {
                setIsAuthenticated(true);
                setPosition("FG"); //send in the specific posistion that the user has
                setLoginForm(false);
              }}
            >
              Logg inn
            </Button>
          </Grid>
        )}
        {power && (
          <Grid item xs={12} className={styles.gridItem}>
            <h3>Login Powerbruker</h3>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <TextField
                id="standard-username"
                label="Username"
                type="text"
                variant="standard"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              onClick={() => {
                setIsAuthenticated(true);
                setPosition("PROFILE"); //send in the specific posistion that the user has
                setLoginForm(false);
              }}
            >
              Logg inn
            </Button>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Login;
