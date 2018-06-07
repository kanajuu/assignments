let duplicateRemover = function(str) {
  let output = {
    noDupes: "",
    extras: ""
  };
  for (let i = 0; i < str.length; i++) {
    if (output.noDupes.indexOf(str[i] > -1)) {
      output.noDupes += str[i];
    } else {
      output.extras += str[i];
    }
  }
};

noDupes("benjammin");
