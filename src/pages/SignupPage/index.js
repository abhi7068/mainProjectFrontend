import React from 'react';
import Signup from '../../organisms/Signup';
import TitleComponent from '../../atoms/Title';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
function SignupPage() {
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
        <TitleComponent>Signup</TitleComponent>
        <Signup />
      </Grid>
    </Container>
  );
}

export default SignupPage;
