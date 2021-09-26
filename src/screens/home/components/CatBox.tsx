import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@mui/styles";

const CatBox = (catUrls: Array<any>) => {
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

  let cats = [];
  for (let i in catUrls) {
    cats.push(
      <ImageListItem key={catUrls[i].url}>
        <img
          src={`${catUrls[i].url}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${catUrls[i].url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={"random cat"}
          loading="lazy"
        />
      </ImageListItem>
    );
  }

  return (
    <Box className={classes.basicBox}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {cats}
      </ImageList>
    </Box>
  );
};

export default CatBox;
