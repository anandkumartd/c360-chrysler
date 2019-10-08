import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchProfiles } from "../actions/searchProfilesActions";
import{fetchAttributes} from "../actions/attributeActions";
import logo from './logo.svg';
import Button from "@material-ui/core/Button";

var Treasure = require('td-js-sdk')
var td = new Treasure({
        database: 'c360',
        writeKey: '1199/a820ff5a25e36501cc8651472f667d80231611ef',
        cdpHost: 'cdp-staging.in.treasuredata.com',
        host: 'in-staging.treasuredata.com'
      });

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     searchProfiles:[], 
     results:[],
      spacing: 3
    };
  }



 fetchData(email){
  let currentComponent = this;

    var successCallback = function (object) {
      console.log('object'+ JSON.stringify(object));
      console.log(object[0].attributes);
      var profiles= [];
     
      if(object[0].values.length){
profiles.push(object[0].attributes); 
console.log('sprofiles:'+JSON.stringify(profiles));
var customerID =  object[0].attributes.customer_id;
currentComponent.props.fetchAttributes(customerID);

      }
      currentComponent.setState({results:profiles});
console.log(profiles); 
        };
       
     
      var errorCallback = function(err) {
            console.log(err);
          };
          td.fetchUserSegments({
            'audienceToken': 'cfe52bfb-9185-4b0c-8469-163939b07e39',
                  'version': '2',
                  keys: {
                    'email': email
                    }
          }, successCallback, errorCallback)
            
        }
  
   
        

  render() {
  const searchedProfiles = this.props.attributes;

    // const { error, loading, searchedProfiles } = this.props;
    // if (error) {
      // return <div>Error! {error.message}</div>;
    // }
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
var search = <SearchBar
style={{ marginBottom: '100px', maxWidth: '500px', margin:'0px auto' }}
value={this.state.value}
onChange={newValue => this.setState({ value: newValue })}
onRequestSearch={() => this.fetchData(this.state.value)}
/>;
console.log('searchresult:'+this.state.results);

    return (
      <div>
      <p className={'logo'}><img src={logo} alt="Logo" style={{width:'220px', marginBottom:'20px'}}/></p>
      <div className={"searchbar"}>
        {search}
        <Button
variant="contained"
color="primary"
onClick={() => {
this.fetchData(this.state.value);
}}
>
Search
</Button></div>


        <Grid container spacing={2}>
          <Grid item style={{width:"100%"}}>
            <Grid container justify="center" spacing={this.state.spacing}>
              {/*  this.props.profiles.map( }
              {searchedProfiles.map((
               // profile // [0, 1, 2].map(value =>,  key={value}
              //  ) => (**/}

                { this.state.value !== '' ? 
  
                <Grid item xs={3} className={"noshadow"} style={{marginTop:'50px'}} >
                    
        { this.state.results.length !== 0 ?
                  <Paper> 
                    <ProfileCard profile={this.props.attributes} />
                  </Paper>
     : <p style={{textAlign:'center'}}>Please search with the proper email address! </p>
    }
                </Grid>
             
                : null }
    
            </Grid>
          </Grid>
        </Grid>

        { this.state.value == null || this.state.value == '' ? 
        <Grid container spacing={4} style={{marginTop:'40px'}}>
        <Grid item>
          <Grid container justify="center" spacing={this.state.spacing}>
            {this.props.profiles.map((
              profile // [0, 1, 2].map(value =>,  key={value}
            ) => (
              //this.props.profiles.count
              <Grid item xs={3}>
                <Paper>
                  <ProfileCard profile={profile} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
: null }
     
      </div>

    );
    //return this.props.profiles.map(profile => (
    // <ProfileCard profile={profile} />
    // ));
  }
}

ProfileList.propTypes = {
  searchProfiles: PropTypes.func.isRequired,
  searchedProfiles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  searchedProfiles: state.searchedProfiles.items,
  loading: state.searchedProfiles.loading,
  error: state.searchedProfiles.error,
  attributes: state.attributes.item
});

const mapActionsToProps = {
  searchProfiles: searchProfiles,
  fetchAttributes: fetchAttributes
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProfileList);
