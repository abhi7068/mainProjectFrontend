import React from 'react';
import Login from '../../organisms/Login';
import TitleComponent from '../../atoms/Title';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <TitleComponent data-testid="login">Login</TitleComponent>
        {/* <Grid> */}
        <Login />
        {/* </Grid> */}
      </Grid>
    </Container>
  );
}

export default LoginPage;
