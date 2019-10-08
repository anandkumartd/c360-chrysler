import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  HeatCard,
  HeatTableCard,
  GheatCard
} from "../Components/ProfileDialog/index";

class Dealership extends Component {
  state = {};
  render() {
    const profile = this.props.profile;
 
    return (
    
      <div class="gridWrapper dealership" style={{ height: "auto", marginBottom:"20px" }}>
      <Grid container spacing={1} style={{ height: "auto" }}>
        <Grid item xs={12} className={"tableSec"} style={{ display: "flex", flex: "1" }}>
       <HeatTableCard profile={profile} />
        </Grid>
        
      </Grid>
      <Grid container spacing={1} style={{ height: "auto" }}>
        <Grid item xs={12} style={{ display: "flex", flex: "1" }}>  
      <GheatCard profile={profile}/>
       </Grid> 
      </Grid>
      <Grid container spacing={1} style={{ height: "auto" }}>
      
      </Grid>
    </div>
    );
  }
}

export default Dealership;
