import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <>
      <Paper elevation={3}>
        <Stack>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>{following}</Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default PaperInformation;
