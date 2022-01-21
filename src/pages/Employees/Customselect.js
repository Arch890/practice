import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


export default function VirtualizedAutocomplete() {
  return (
    <Autocomplete
    id="tags-outlined"
    options={BranchList}
    getOptionLabel={(option) => option.title}
    filterSelectedOptions
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        label="Branch"
        placeholder="Select"
      />
    )}
  />
  );
}

// slect places list
const BranchList = [
  { title: 'Sukedhara'},
  { title: 'Chabhil'},
  { title: 'Kapan'},
  { title: 'Baneshowr' },
  { title: 'gaushala' },
  { title: "Nakhipot" },
];