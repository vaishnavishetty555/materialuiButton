import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    border: "none",
    backgroundColor: "lightblue"
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Button
        classes={{ root: classes.root }}
        // className={classes.root}
        variant="outlined"
        color="primary"
      >
        without
      </Button>
    </div>
  );
}
