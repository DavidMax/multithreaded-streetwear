import React from 'react';

import SignIn from '../../auth/sign-in/sign-in.component'
// third party
import Container from '@material-ui/core/Container';


const SignInAndSignUpPage = () => (
  <Container maxWidth="sm">
    <SignIn />
  </Container>
);

export default SignInAndSignUpPage;