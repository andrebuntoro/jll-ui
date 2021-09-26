import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

import { signOut, grantUserRole } from "../../service/auth";
import { getCatServiceHealth } from "../../service/cat";
import { useAuthContext } from "../../context/AuthContext";

function HomeBox() {
  const [pageContent, setPageContent] = useState("");
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getCatServiceHealth()
      .then((res) => {
        setPageContent(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setPageContent("");
    };
  }, []);

  // handler
  const handleSignOut = () => {
    signOut().catch((err) => {
      console.log(err);
    });
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleRoleSubmit = () => {
    grantUserRole(userId, role)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
  });
  const classes = useStyles();

  return (
    <Box>
      HELLO WORLD
      {pageContent}
      <Box className={classes.basicBox}>
        <Button variant="contained" onClick={handleSignOut}>
          Signout
        </Button>
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
          id="role-input"
          label="Role"
          size="small"
          sx={{
            maxWidth: "70%",
          }}
          onChange={handleRoleChange}
        />
      </Box>
      <Box className={classes.basicBox}>
        <Button variant="contained" onClick={handleRoleSubmit}>
          GRANT
        </Button>
      </Box>
    </Box>
  );
}

export default HomeBox;
