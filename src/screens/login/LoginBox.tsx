import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";

import { AuthContext } from "../../context/AuthContext";
import { createAccount, signIn } from "../../service/auth";
import { Paths } from "../../route/path";

function LoginBox() {
  // context
  const history = useHistory();
  const user = useContext(AuthContext);
  if (user) {
    history.push(Paths.home);
  }

  // state
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // handler
  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    setIsLoading(true);
    signIn(userId, password).catch((err) => {
      setErrMessage(err);
      setIsLoading(false);
    });
  };

  const handleSignUp = () => {
    setIsLoading(true);
    createAccount(userId, password).catch((err) => {
      setErrMessage(err);
      setIsLoading(false);
    });
  };

  // styling
  const useStyles = makeStyles({
    basicBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5%",
    },
    errorBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "3%",
    },
    basicButton: {
      display: "flex",
      marginRight: "2%",
    },
  });
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 500, minHeight: 300 }}>
      <CardContent>
        <Box className={classes.basicBox}>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
        </Box>
        <Box className={classes.basicBox}>
          <TextField
            fullWidth
            id="user-id-input"
            label="UserId"
            size="small"
            sx={{
              maxWidth: "70%",
            }}
            onChange={handleUserIdChange}
          />
        </Box>
        <Box className={classes.basicBox}>
          <TextField
            fullWidth
            id="password-input"
            label="Password"
            type="password"
            size="small"
            sx={{
              maxWidth: "70%",
            }}
            onChange={handlePasswordChange}
          />
        </Box>

        <Box className={classes.errorBox}>
          <Typography
            variant="caption"
            display="block"
            color="#fc0703"
            gutterBottom
          >
            {errMessage}
          </Typography>
        </Box>

        {isLoading ? (
          <Box className={classes.basicBox}>
            <CircularProgress />
          </Box>
        ) : (
          <Box className={classes.buttonBox}>
            <Button
              className={classes.basicButton}
              variant="contained"
              onClick={handleSignUp}
            >
              {isLoading ? <CircularProgress /> : "Signup"}
            </Button>
            <br />
            <Button
              className={classes.basicButton}
              variant="contained"
              onClick={handleLogin}
            >
              {isLoading ? <CircularProgress /> : "Login"}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default LoginBox;
