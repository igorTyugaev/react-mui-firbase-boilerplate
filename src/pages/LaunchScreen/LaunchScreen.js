import React, { Component } from "react";

import PropTypes from "prop-types";

import withStyles from '@mui/styles/withStyles';

import { CircularProgress } from "@mui/material";

const styles = (theme) => ({
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
});

class LaunchScreen extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    return (
      <div className={classes.center}>
        <CircularProgress />
      </div>
    );
  }
}

LaunchScreen.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LaunchScreen);
