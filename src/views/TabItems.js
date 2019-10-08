import React, { Component } from "react"; // Link
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import { Dashboard, Dealership, Journey, Attributes, Behaviors } from "./index";
import Divider from "@material-ui/core/Divider";

const AntTabs = withStyles({
  // root: {
  // borderBottom: "1px solid #c9c7c5"
  // },
  indicator: {
    backgroundColor: "#2d9cdb"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    "&:hover": {
      color: "#2d9cdb",
      opacity: 1
    },
    "&$selected": {
      color: "#2d9cdb",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#2d9cdb"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

class TabItems extends Component {
  state = {
    activeTabIndex: 0
  };

  handleChange = (event, value) => {
    this.setState({ activeTabIndex: value });
    console.log("tab value" + value);
  };

  render() {
    // const { classes } = this.props;
    const { activeTabIndex } = this.state;
    const profile = this.props.profile;

    return (
      // <div className={classes.root}>
      <div>
        <AntTabs
          value={activeTabIndex}
          onChange={this.handleChange}
          style={{ float: "right" }}
        >
          <AntTab label="Dashboard" /> {/* component={Link} to="/dashboard"  */}
          <AntTab label="Dealership" />
          <AntTab label="Journey" />
          <AntTab label="Attributes" />
          <AntTab label="Behaviors" />
        </AntTabs>
        <Divider style={{ padding: "0px", width: "100%" }} />

        {activeTabIndex === 0 && <Dashboard profile={profile} />}
        {activeTabIndex === 1 && <Dealership profile={profile} />}
        {activeTabIndex === 2 && <Journey profile={profile} />}
        {activeTabIndex === 3 && <Attributes profile={profile} />}
        {activeTabIndex === 4 && <Behaviors profile={profile} />}
        {/* 
        {activeTabIndex === 0 && (
          <div onClick={() => this.setState({ activeTabIndex: 1 })}>
            <TabContainer>
              <Dashboard profile={profile} />
            </TabContainer>
          </div>
        )}

        {activeTabIndex === 1 && (
          <div>
            <TabContainer>
              <Journey profile={profile} />
            </TabContainer>
          </div>
        )}
        */}
      </div>
    );
  }
}

// TabItems.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default TabItems;
