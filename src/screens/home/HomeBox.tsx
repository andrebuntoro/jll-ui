import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import { signOut } from "../../service/auth";
import { useAuthContext } from "../../context/AuthContext";

function HomeBox() {
  const { updateUser } = useAuthContext()!;

  // handler
  const handleSignOut = () => {
    signOut()
      .then(() => {
        updateUser(null);
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
