import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

// Styled components using Emotion
const CampaignContainer = styled(Box)`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

const CampaignCard = styled(Card)`
  background-color: #333;
  color: white;
  margin: 16px;
  width: 300px;
  &:hover {
    box-shadow: 0px 4px 8px rgba(255, 165, 0, 0.5);
  }
`;

const NewCampaignCard = styled(Card)`
  background-color: #ff9800;
  color: white;
  margin: 16px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0px 4px 8px rgba(255, 165, 0, 0.7);
  }
`;

const CampaignCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Campaigns = () => {
  const { user_id } = useParams();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/campaigns/${user_id}`)
      .then(response => response.json())
      .then(data => {
        setCampaigns(data);
      })
      .catch(error => {
        console.error('Error fetching campaigns:', error);
      });
  }, [user_id]);

  return (
    <CampaignContainer>
      <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 4 }}>
        Campaigns
      </Typography>
      <Grid container justifyContent="center">
        {campaigns.map(campaign => (
          <CampaignCard key={campaign._id} component={Link} to={`/campaign/${campaign._id}`}>
            <CampaignCardContent>
              <Typography variant="h6" sx={{ fontFamily: 'Montserrat' }}>
                {campaign.campaign_name}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Montserrat', marginTop: 2 }}>
                {campaign.company_name}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Montserrat', marginTop: 2 }}>
                {campaign.job_title}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Montserrat', marginTop: 2 }}>
                {campaign.job_description}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Montserrat', marginTop: 2 }}>
                {campaign.candidate_criteria}
              </Typography>
            </CampaignCardContent>
          </CampaignCard>
        ))}
        <NewCampaignCard component={Link} to="/campaign">
          <CampaignCardContent>
            <Typography variant="h4" sx={{ fontFamily: 'Montserrat' }}>
              +
            </Typography>
          </CampaignCardContent>
        </NewCampaignCard>
      </Grid>
    </CampaignContainer>
  );
};

export default Campaigns;
