import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Searcher from './componets/Searcher';
import getUser from './services/users';
import UserCard from './containers/UserCard';

const App = () => {
  const [inputUser, setInputUser] = useState('luiznaiper');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  const getInUser = async (user) => {
    const userResponse = await getUser(user);

    if (userState === 'luiznaiper') {
      localStorage.setItem('luiznaiper', userResponse);
    }
    if (userResponse.message === 'Not Found') {
      const { luiznaiper } = localStorage;
      setInputUser(luiznaiper);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };

  console.log(userState);

  useEffect(() => {
    getInUser(inputUser);
  }, [inputUser]);

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
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
