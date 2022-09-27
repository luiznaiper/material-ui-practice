import React from 'react';
import { Grid, Avatar, Stack } from '@mui/material';
import PrincipalInformation from '../../componets/PrincipalInformation';
import Description from '../Description';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url, login } = userState;

  const mainGridStyle = {
    marginTop: '15px',
  };

  const avatarStyle = {
    width: '100%',
    height: 'auto',
    marginLeft: '5px',
  };

  const mainStack = {
    margin: '30px',
  };

  return (
    <Grid container spacing={2} sx={mainGridStyle}>
      <Grid item xs={3}>
        <Avatar alt={login} src={avatar_url} sx={avatarStyle} />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={1} sx={mainStack}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
