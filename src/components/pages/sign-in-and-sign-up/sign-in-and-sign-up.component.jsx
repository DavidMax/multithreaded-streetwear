import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import SignIn from '../../auth/sign-in/sign-in.component'

const SignInAndSignUpPage = () => (
  <Container maxWidth="sm">
    <SignIn />
  </Container>
);

export default SignInAndSignUpPage;