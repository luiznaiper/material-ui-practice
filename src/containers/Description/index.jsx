import React from 'react';
import { Stack, Typography } from '@mui/material';
import PaperInformation from '../../componets/PaperInformation';
import LocationInformation from '../../componets/LocationInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  const stackDescriptionStyles = {
    justifyContent: 'center',
  };
  return (
    <>
      <Stack sx={stackDescriptionStyles}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            autem aspernatur similique adipisci, quia, sit praesentium ipsum
            nemo laborum ratione exercitationem dolorum! Quia sed error voluptas
            quas. Fugit, possimus harum.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};

export default Description;
