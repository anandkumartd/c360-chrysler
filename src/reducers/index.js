import { combineReducers } from "redux";
import profilesReducer from "./profilesReducer";
import attributeReducer from "./attributeReducer";
import predictReducer from "./predictReducer";
import searchProfilesReducer from "./searchProfilesReducer";
export default combineReducers({
  profiles: profilesReducer,
  attributes: attributeReducer,
  predicts: predictReducer,
  searchedProfiles: searchProfilesReducer
});
