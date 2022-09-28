import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  const containerLocationInformationStyles = {
    marginTop: '15px',
  };
  return (
    <Grid container spacing={2} sx={containerLocationInformationStyles}>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          {location !== null ? (
            <Typography>{location}</Typography>
          ) : (
            <Typography>No Location</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography>@{twitter_username}</Typography>
          ) : (
            <Typography>No Twitter</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog !== null ? (
            <a href={blog} target="_blank" rel="noopener noreferrer">
              <Typography>@{twitter_username}</Typography>
            </a>
          ) : (
            <Typography>No Website</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company !== null ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>No Company</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
