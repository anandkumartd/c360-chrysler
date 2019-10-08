class Parser {
  makeDictFromArrays(names, rows) {
    var profiles_dict = [];
    for (let i = 0; i < rows.length; i++) {
      var profile = {};
      for (let j = 0; j < names.length; j++) {
        profile[names[j]] = rows[i][j];
      }
      profiles_dict.push(profile);
    }
    return profiles_dict;
  }
}

export default Parser;
