import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

import { signOut } from "../../service/auth";
import { Paths } from "../../route/path";

function HomeBox() {
  const history = useHistory();

  // handler
  const handleSignOut = () => {
    signOut()
      .then(() => {
        history.push(Paths.login);
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
      <Box className={classes.basicBox}>
        <Button variant="contained" onClick={handleSignOut}>
          Signout
        </Button>
      </Box>
    </Box>
  );
}

export default HomeBox;
