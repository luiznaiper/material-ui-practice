import React from 'react';
import { Stack, Typography } from '@mui/material';
import PaperInformation from '../../componets/PaperInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack>
        {bio !== null ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            autem aspernatur similique adipisci, quia, sit praesentium ipsum
            nemo laborum ratione exercitationem dolorum! Quia sed error voluptas
            quas. Fugit, possimus harum.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      {/* <LocationInformation /> */}
    </>
  );
};

export default Description;
