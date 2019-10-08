import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  InterestWordsCard,
  JourneyCard,
  PreferencesCard,
  PsychographicsCard,
  RevenueCard,
  ScoresCard,
  SegmentsCard,
  SourcesCard,
  ImageCard,
  PaintCard
} from "../Components/ProfileDialog/index";

class Dashboard extends Component {
  state = {};
  render() {
    const profile = this.props.profile;

    return (
      // <div className="div-body">
      <div class="gridWrapper" style={{ height: "auto", marginBottom:"20px" }}>
        <Grid container spacing={1} style={{ height: "auto" }}>
          <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
            <RevenueCard profile={profile} />
          </Grid>
          <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
            <SegmentsCard profile={profile} />
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ height: "auto" }}>
          <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
            <ScoresCard profile={profile} />
          </Grid>
          <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
            <ImageCard profile={profile} />
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ height: "auto" }}>
        <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
            <PaintCard profile={profile}/>
          </Grid>
          <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
          <SourcesCard  profile={profile} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
