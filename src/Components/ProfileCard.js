import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Icon from "@material-ui/core/Icon";
import { SideBar } from "./ProfileDialog/index";
import TabItems from "../views/TabItems";
// import { useSelector } from "react-redux";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

class ProfileCard extends Component {
  state = {
    open: false
  };

  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "5px",
      // borderBottom: "1px #ccc dotted",
      width: "100%",
      height: "100px"
    };
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCardClick(e) {
    console.log("The card was clicked.");
  }

  render() {
    const profile = this.props.profile;
    // const profile = useSelector(state => state.profiles.items);

    const return_name =
      (profile["first_name"] == null ? "" : profile["first_name"]) +
      " " +
      (profile["last_name"] == null ? "" : profile["last_name"]);

    const return_email = profile["email"] == null ? "" : profile["email"];

    return (
      <div className={
        profile["email"] == null 
           ? "inactive"
           : "active"
       }>
        <Button
          variant="outlined"
          class="profilelink"
          onClick={this.handleClickOpen}
        >
          <div>
            <div className={"profileitem"}>
              <p>
                {return_name}
                <br />
                {return_email}
              </p>
            </div>
          </div>
        </Button>
        <Dialog
          maxWidth
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {return_name}
          </DialogTitle>
          <DialogContent
            dividers
            style={{
              padding: "0px",
              height: "100%"
            }}
          >
            <div
              id="mainFrame"
              style={{
                height: "100%",
                display: "block"
              }}
            >
              <div
                className={"leftFrame"}
                style={{
                  "flex-grow": "1",
                  maxWidth: "320px",
                  padding: "5px 25px 25px 25px"
                }}
              >
                <SideBar profile={profile} />
              </div>
              <div
                className={"rightFrame"}
                style={{
                  "flex-grow": "5",
                  borderLeft: "1px solid #C9C7C5",
                  padding: "0px 15px"
                }}
              >
                <TabItems profile={profile} />
              </div>
            </div>
          </DialogContent>
          <DialogActions
            style={{
              backgroundColor: "#f3f2f2",
              paddingTop: "15px",
              paddingBottom: "15px",
              zIndex: "99999"
            }}
          >
            <Button onClick={this.handleClose} class="frameButton">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        {/*  <Link to={`/profile_detail/${profile.email}`}>   //class="profilelist" class="image" */}
      </div>
    );
  }
}

export default ProfileCard;
