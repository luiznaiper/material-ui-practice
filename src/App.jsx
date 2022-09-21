import React from 'react';
import { Container } from '@mui/material';
import Searcher from './componets';
import { useState } from 'react';

const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState('inputUser');

  return (
    <Container
      sx={{
        background: '#2C2C38',
        color: '#8c8c8e',
        width: '80vh',
        height: '400px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};

export default App;
