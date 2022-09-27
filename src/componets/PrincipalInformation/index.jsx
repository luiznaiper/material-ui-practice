import React from 'react';
import { Stack, Typography } from '@mui/material';

const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  const stackStyle = {
    justifyContent: 'space-between',
  };

  return (
    <>
      <Stack direction="row" sx={stackStyle}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="caption">@{login}</Typography>
    </>
  );
};

export default PrincipalInformation;
