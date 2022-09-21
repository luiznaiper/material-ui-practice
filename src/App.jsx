import React from "react";
import { Container } from "@mui/material";
import Searcher from "./componets";

const App = () => {
  return(
    <Container sx={{
      background: '#2C2C38' ,
      color: '#8c8c8e',
      width: '80vh',
      height: '400px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <Searcher/>
    </Container>    
  )
};

export default App;