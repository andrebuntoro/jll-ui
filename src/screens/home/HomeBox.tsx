import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";

import { signOut, grantUserRole } from "../../service/auth";
import { getCatBreeds, getCatByBreed, getRandomCats } from "../../service/cat";
import { useAuthContext } from "../../context/AuthContext";
import CatBox from "./components/CatBox";

function HomeBox() {
  const [breed, setBreed] = useState("");
  const [catBreeds, setCatBreeds] = useState([]);
  const [catUrls, setCatUrls] = useState([]);
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    handleRefreshCat();
    handleCatBreeds();
  }, []);

  // user handler
  const handleSignOut = () => {
    signOut().catch((err) => {
      console.log(err);
    });
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  // role handler

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

  // cat handler

  const handleRefreshCat = () => {
    if (breed) {
      getCatByBreed(breed)
        .then((res) => {
          setCatUrls(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getRandomCats()
        .then((res) => {
          setCatUrls(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCatBreeds = () => {
    getCatBreeds()
      .then((res) => {
        res.push({ label: "random", id: "" });
        setCatBreeds(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCatBreed = (value: any) => {
    if (value) {
      setBreed(value.id);
    }
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
      <CatBox {...catUrls} />
      <Box className={classes.basicBox}>
        <Button variant="contained" onClick={handleRefreshCat}>
          Refresh
        </Button>
      </Box>
      <Box className={classes.basicBox}>
        <Autocomplete
          disablePortal
          fullWidth
          id="combo-box-demo"
          options={catBreeds}
          size="small"
          sx={{
            maxWidth: "70%",
          }}
          renderInput={(params) => <TextField {...params} label="Breed" />}
          onChange={(event, value) => handleCatBreed(value)}
        />
      </Box>

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
