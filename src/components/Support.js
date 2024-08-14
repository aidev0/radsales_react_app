import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';

const SupportContainer = styled(Box)`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Section = styled(Box)`
  margin-bottom: 32px;
  width: 100%;
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
`;

const ActionButton = styled(Button)`
  margin-top: 16px;
  background-color: white;
  color: black;
  &:hover {
    background-color: #f0f0f0;
  }
`;

function Support() {
  const { user_id } = useParams();
  const [userEmail, setUserEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/customer_messages/${user_id}`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching customer messages:', error));
  }, [user_id]);

  const handleSubmit = () => {
    const messageData = {
      user_id,
      user_email: userEmail,
      name,
      subject,
      body,
    };

    fetch('https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/user_messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Message submission response:', data);
        // Update UI after submission
        setMessages([...messages, data.data]);
        setUserEmail('');
        setName('');
        setSubject('');
        setBody('');
      })
      .catch(error => {
        console.error('Error submitting message:', error);
      });
  };

  return (
    <SupportContainer>
      <Typography variant="h4" sx={{ fontFamily: 'Montserrat', marginBottom: 4 }}>
        Support
      </Typography>
      {messages.length === 0 ? (
        <Section>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
            How can I help you?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField
                label="Your Email"
                variant="outlined"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ActionButton onClick={handleSubmit}>Submit</ActionButton>
            </Grid>
          </Grid>
        </Section>
      ) : (
        <Section>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginBottom: 2 }}>
            Your Messages
          </Typography>
          {messages.map((message, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1">Subject: {message.subject}</Typography>
              <Typography variant="body2">Message: {message.body}</Typography>
            </Box>
          ))}
        </Section>
      )}
    </SupportContainer>
  );
}

export default Support;
