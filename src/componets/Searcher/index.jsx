import React, { useState } from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  const stackStyles = {
    marginTop: '30px',
    width: '80%',
  };

  const textFieldStyles = {
    width: '90%',
    margin: '0 auto',
    border: 'none',
    background: 'white',
    borderRadius: '4px',
  };

  return (
    <Stack sx={stackStyles} direction="row">
      <TextField
        sx={textFieldStyles}
        id="outlined-basic"
        label="Github User"
        placeholder="Search user"
        value={valueInput}
        onChange={onSearchValueChange}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
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
