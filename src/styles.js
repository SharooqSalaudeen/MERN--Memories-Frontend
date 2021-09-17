import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: 800,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  image: {
    height: "90px",
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
  },
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));
