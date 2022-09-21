import React from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
  const stackStyles = {
    marginTop: '30px',
    width: '80%',
  };

  const textFieldStyles = {
    width: '90%',
    margin: '0 auto',
    border: 'none',
    background: 'white',
  };

  return (
    <Stack sx={stackStyles} direction="row">
      <TextField
        sx={textFieldStyles}
        type="search"
        autoComplete="off"
        label="Github User"
        id="outlined-basic"
        placeholder="Search user"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
        InputLabelProps={{
          style: { color: '#8c8c8e' },
        }}
      />
    </Stack>
  );
};

export default Searcher;
