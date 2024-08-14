import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

// Styled components using Emotion
const PricingContainer = styled(Box)`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  padding-bottom: 100px; /* Added padding to ensure buttons are visible */
`;

const PricingCard = styled(Card)`
  background-color: ${({ selected }) => (selected ? '#444' : '#333')};
  color: white;
  margin: 16px;
  padding: 16px;
  width: 300px;
  border: ${({ selected }) => (selected ? '2px solid #ff4081' : '2px solid transparent')};
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const Price = styled(Typography)`
  font-size: 2rem;
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
`;

const Feature = styled(Typography)`
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
`;

const Note = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
`;

const FooterButtonContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #222;
  padding: 16px;
  display: flex;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
`;

const FooterButton = styled(Button)`
  background-color: #ff4081;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 16px 32px;
  &:hover {
    background-color: #ff1a70;
  }
`;

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState({ name: 'Ultimate', price: 600 });

  const handleCardClick = (planName, planPrice) => {
    setSelectedPlan({ name: planName, price: planPrice });
  };

  const handleSubscribe = () => {
    // Redirect to payment page or subscription handling logic here
    console.log(`Subscribing to ${selectedPlan.name} plan for $${selectedPlan.price}/mo`);
  };

  return (
    <PricingContainer>
      <Typography variant="h2" sx={{ fontFamily: 'Montserrat', marginBottom: 4 }}>
        Pricing Plans
      </Typography>
      <Note>
        You must have a LinkedIn Sales Navigator account to use the bot. For integration with your LinkedIn Sales Navigator account, please contact us at info@radsales.ai.
      </Note>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Ultimate'}
            onClick={() => handleCardClick('Ultimate', 600)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Ultimate
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$600 / mo</Price>
              <Feature>6,000 InMails</Feature>
              <Feature>6,000 Free InMails Detection</Feature>
              <Feature>30,000 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Elite'}
            onClick={() => handleCardClick('Elite', 500)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Elite
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$500 / mo</Price>
              <Feature>5,000 InMails</Feature>
              <Feature>5,000 Free InMails Detection</Feature>
              <Feature>25,000 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Premium'}
            onClick={() => handleCardClick('Premium', 400)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Premium
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$400 / mo</Price>
              <Feature>4,000 InMails</Feature>
              <Feature>4,000 Free InMails Detection</Feature>
              <Feature>20,000 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Advanced'}
            onClick={() => handleCardClick('Advanced', 300)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Advanced
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$300 / mo</Price>
              <Feature>3,000 InMails</Feature>
              <Feature>3,000 Free InMails Detection</Feature>
              <Feature>15,000 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Standard'}
            onClick={() => handleCardClick('Standard', 200)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Standard
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$200 / mo</Price>
              <Feature>2,000 InMails</Feature>
              <Feature>2,000 Free InMails Detection</Feature>
              <Feature>10,000 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Basic'}
            onClick={() => handleCardClick('Basic', 100)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Basic
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$100 / mo</Price>
              <Feature>1,000 InMails</Feature>
              <Feature>1,000 Free InMails Detection</Feature>
              <Feature>5,000 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Entry'}
            onClick={() => handleCardClick('Entry', 50)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Entry
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$50 / mo</Price>
              <Feature>500 InMails</Feature>
              <Feature>500 Free InMails Detection</Feature>
              <Feature>2,500 Leads Qualifications</Feature>
              <Feature>400 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
        <Grid item>
          <PricingCard
            selected={selectedPlan.name === 'Free'}
            onClick={() => handleCardClick('Free', 0)}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
                Free
              </Typography>
              <Price sx={{ fontFamily: 'Montserrat' }}>$0 / mo</Price>
              <Feature>50 InMails</Feature>
              <Feature>50 Free InMails Detection</Feature>
              <Feature>1,000 Leads Qualifications</Feature>
              <Feature>100 Connection Requests</Feature>
            </CardContent>
          </PricingCard>
        </Grid>
      </Grid>
      <FooterButtonContainer>
        <FooterButton onClick={handleSubscribe}>
          {`Subscribe to ${selectedPlan.name} Plan for $${selectedPlan.price}/mo`}
        </FooterButton>
      </FooterButtonContainer>
    </PricingContainer>
  );
}

export default Pricing;
