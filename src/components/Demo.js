import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';
import styled from '@emotion/styled';
import Campaign from './Campaign';
import Leads from './Leads';
import Message from './Message';

// Styled components using Emotion
const DemoContainer = styled(Box)`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GenerateButton = styled(Button)`
  background-color: #ff6347;
  color: white;
  font-size: 1.25rem;
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 16px;
  &:hover {
    background-color: #ff4500;
  }
`;

const SendButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  font-size: 1.25rem;
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 16px;
  &:hover {
    background-color: #388e3c;
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
`;

function Demo() {
  const { campaign_id } = useParams();
  const [leadsData, setLeadsData] = useState([]);
  const [campaignData, setCampaignData] = useState(null);
  const [messagesVisible, setMessagesVisible] = useState(false);

  useEffect(() => {
    if (campaign_id) {
      fetch(`https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/campaign/${campaign_id}`)
        .then((response) => response.json())
        .then((data) => {
          setCampaignData(data);
        })
        .catch((error) => {
          console.error('Error fetching campaign:', error);
        });
    } else {
      // Render empty form when no campaign_id is provided
      setCampaignData({});
    }
  }, [campaign_id]);

  const handleGenerateLeads = () => {
    fetch('https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/leads_features', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaign_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLeadsData(data);
        console.log('Fetched leads data:', data);
      })
      .catch((error) => {
        console.error('Error fetching leads:', error);
      });
  };

  const handleGenerateMessages = () => {
    setMessagesVisible(true);
  };

  const handleSendInMails = () => {
    fetch(`https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/send_inmails/${campaign_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('InMails sent:', data);
      })
      .catch((error) => {
        console.error('Error sending InMails:', error);
      });
  };

  return (
    <DemoContainer>
      <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 4 }}>
        Demo
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {campaignData && (
          <Grid item xs={12}>
            <Campaign campaignData={campaignData} />
          </Grid>
        )}
        <ButtonContainer>
          <GenerateButton onClick={handleGenerateLeads}>
            Generate Leads and Qualify (powered by AI)
          </GenerateButton>
        </ButtonContainer>
      </Grid>
      {leadsData.length > 0 && campaignData && (
        <>
          <Leads leads={leadsData} keepCols={campaignData.keep_cols} />
          <ButtonContainer>
            <GenerateButton onClick={handleGenerateMessages}>
              Generate InMail Messages for Qualified Leads
            </GenerateButton>
          </ButtonContainer>
        </>
      )}
      {messagesVisible && (
        <>
          <Message campaignId={campaign_id} />
          <ButtonContainer>
            <SendButton onClick={handleSendInMails}>
              Send InMail Messages to All Qualified Leads
            </SendButton>
          </ButtonContainer>
        </>
      )}
    </DemoContainer>
  );
}

export default Demo;
