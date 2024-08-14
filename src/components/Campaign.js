import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Grid, TextField } from '@mui/material';
import styled from '@emotion/styled';
import Leads from './Leads';
import Message from './Message';

// Styled components using Emotion
const CampaignContainer = styled(Box)`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px; /* To ensure buttons at the bottom are visible */
`;

const InputField = styled(TextField)`
  margin-bottom: 16px;
  width: 100%;
  .MuiInputBase-root {
    color: white;
  }
  .MuiInputLabel-root {
    color: white;
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: orange;
  }
  textarea {
    line-height: 1.5;
    overflow: hidden;
    resize: none;
  }
`;

const SaveButton = styled(Button)`
  background-color: white;
  color: black;
  margin-right: 8px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const PromptButton = styled(Button)`
  background-color: white;
  color: black;
  &:hover {
    background-color: #f0f0f0;
  }
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

function Campaign() {
  const { campaign_id } = useParams();
  const navigate = useNavigate();
  const [jobDescription, setJobDescription] = useState('');
  const [combinedCriteria, setCombinedCriteria] = useState('');
  const [salesNavigatorList, setSalesNavigatorList] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [prompt, setPrompt] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [leadsData, setLeadsData] = useState([]);
  const [messagesVisible, setMessagesVisible] = useState(false);
  const [campaignData, setCampaignData] = useState(null);

  useEffect(() => {
    if (campaign_id) {
      fetch(`https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/campaign/${campaign_id}`)
        .then((response) => response.json())
        .then((data) => {
          setJobDescription(data.job_description || '');
          setCombinedCriteria(data.candidate_criteria || '');
          setSalesNavigatorList(data.sales_navigator_search_url || '');
          setCompanyName(data.company_name || '');
          setPrompt(data.prompt || '');
          setCampaignData(data);
        })
        .catch((error) => {
          console.error('Error fetching campaign:', error);
        });
    } else {
      setCampaignData({});
    }
  }, [campaign_id]);

  const handleSaveChanges = () => {
    const updatedFields = {
      job_description: jobDescription,
      candidate_criteria: combinedCriteria,
      sales_navigator_search_url: salesNavigatorList,
      company_name: companyName,
      prompt: prompt,
    };

    const method = campaign_id ? 'PUT' : 'POST';
    const url = campaign_id
      ? `https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/campaign/${campaign_id}`
      : 'https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/campaign';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!campaign_id && data._id) {
          navigate(`/campaign/${data._id}`);
        }
        console.log('Campaign saved/updated successfully:', data);
      })
      .catch((error) => {
        console.error('Error saving/updating campaign:', error);
      });
  };

  const togglePromptVisibility = () => {
    setShowPrompt(!showPrompt);
  };

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

  const adjustHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <CampaignContainer>
      <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 4 }}>
        Create/Modify the Campaign
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <InputField
            label="Job Description"
            variant="outlined"
            multiline
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            onInput={adjustHeight}
            style={{ height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Candidate Criteria"
            variant="outlined"
            multiline
            value={combinedCriteria}
            onChange={(e) => setCombinedCriteria(e.target.value)}
            onInput={adjustHeight}
            style={{ height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Sales Navigator List URL"
            variant="outlined"
            value={salesNavigatorList}
            onChange={(e) => setSalesNavigatorList(e.target.value)}
            onInput={adjustHeight}
            style={{ height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            onInput={adjustHeight}
            style={{ height: 'auto' }}
          />
        </Grid>
        <ButtonContainer>
          <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
          <PromptButton onClick={togglePromptVisibility}>
            {showPrompt ? 'Hide Prompt' : 'Show Prompt'}
          </PromptButton>
        </ButtonContainer>
        {showPrompt && (
          <Grid item xs={12}>
            <InputField
              label="Prompt"
              variant="outlined"
              multiline
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onInput={adjustHeight}
              style={{ height: 'auto' }}
            />
          </Grid>
        )}
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
    </CampaignContainer>
  );
}

export default Campaign;
