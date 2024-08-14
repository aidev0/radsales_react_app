import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth0 } from '@auth0/auth0-react';

// Styled components using Emotion
const NavBar = styled(AppBar)`
  background: linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(0,0,0,1) 100%);
  padding: 0 16px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const Logo = styled(Typography)`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: white;
  margin-right: 12px;
`;

const NavLinks = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0 16px;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-weight: 500;
    position: relative;
    &:hover {
      color: #ff4081;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: #ff4081;
        bottom: -4px;
        left: 0;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  & > *:nth-of-type(2) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const AuthButtons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin-left: 16px;
    padding: 8px 16px;
    font-weight: 600;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s;
    }
  }
`;

const LandingContent = styled(Box)`
  height: calc(100vh - 64px);
  background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const LoginButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #ff4081;
  color: white;
  &:hover {
    background-color: #ff1a70;
  }
`;

const LoginIcon = styled(LockOutlinedIcon)`
  margin-right: 8px;
`;

const Heading = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ff4081;
`;

const SubHeading = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-bottom: 16px;
  color: white;
`;

const BodyText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #e0e0e0;
`;

function LandingPage() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Box display="flex" alignItems="center">
                <Logo>R</Logo>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <NavLinks>
                <Button color="inherit" component={Link} to="/salesnav-bot">
                  SalesNav Bot
                </Button>
                <Button color="inherit" component={Link} to="/pricing">
                  Pricing
                </Button>
                <Button color="inherit" href="mailto:info@radsales.ai">
                  Contact us
                </Button>
              </NavLinks>
            </Grid>
            <Grid item xs={4}>
              <AuthButtons>
                {isAuthenticated ? (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </Button>
                ) : (
                  <LoginButton
                    color="inherit"
                    onClick={() => loginWithRedirect()}
                  >
                    <LoginIcon />
                    Login
                  </LoginButton>
                )}
              </AuthButtons>
            </Grid>
          </Grid>
        </Toolbar>
      </NavBar>
      <LandingContent>
        <Heading variant="h1">
          RadSales.ai
        </Heading>
        <SubHeading variant="h4">
          Sales Outreach AI Autopilot for LinkedIn Sales Navigator
        </SubHeading>
        <BodyText variant="body1">
          We take care of the repetitive tasks so you can focus on selling.
        </BodyText>
        <BodyText variant="body1" sx={{ textAlign: 'left' }}>
          - Supercharge your LinkedIn Sales Navigator with AI. <br />
          - Search, qualify and rank leads based on your criteria. <br />
          - Generate and send personalized automatic cold messages, replies, warmup messages, and followups effortlessly.
        </BodyText>
      </LandingContent>
    </div>
  );
}

export default LandingPage;
