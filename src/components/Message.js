import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Checkbox, TablePagination } from '@mui/material';
import styled from '@emotion/styled';

// Styled components using Emotion
const MessageContainer = styled(Box)`
  background-color: black;
  color: white;
  padding: 16px;
  width: 100%;
`;

const TableContainerStyled = styled(TableContainer)`
  background-color: #333;
`;

const Message = ({ campaignId }) => {
  const [messages, setMessages] = useState([]);
  const [editedMessages, setEditedMessages] = useState({});
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (campaignId) {
      fetch(`https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/leads_messages/${campaignId}`)
        .then(response => response.json())
        .then(data => {
          setMessages(data);
          const initialEditedMessages = data.reduce((acc, message) => {
            acc[message._id] = { subject: message.message.subject, body: message.message.body };
            return acc;
          }, {});
          setEditedMessages(initialEditedMessages);
          setSelected(data.map(message => message._id)); // Select all rows by default
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    }
  }, [campaignId]);

  const handleInputChange = (id, field, value) => {
    setEditedMessages(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [field]: value
      }
    }));
  };

  const handleSaveChanges = () => {
    fetch(`https://fathomless-journey-90180-a34f7a24c06d.herokuapp.com/api/leads_messages/${campaignId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.entries(editedMessages).map(([id, message]) => ({
        _id: id,
        subject: message.subject,
        body: message.body
      }))),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Messages updated:', data);
        // Handle post-update actions if needed
      })
      .catch(error => {
        console.error('Error updating messages:', error);
      });
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = messages.map((message) => message._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <MessageContainer>
      <TableContainerStyled component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < messages.length}
                  checked={messages.length > 0 && selected.length === messages.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all messages' }}
                />
              </TableCell>
              <TableCell style={{ color: 'white', width: '15%' }}>Name</TableCell>
              <TableCell style={{ color: 'white', width: '25%' }}>Subject</TableCell>
              <TableCell style={{ color: 'white', width: '60%' }}>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((message) => {
              const isItemSelected = isSelected(message._id);
              return (
                <TableRow
                  key={message._id}
                  hover
                  onClick={(event) => handleClick(event, message._id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                  style={{ cursor: 'pointer', backgroundColor: isItemSelected ? '#444' : 'inherit' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': message._id }}
                    />
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    <a href={message.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                      {message.name}
                    </a>
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    <TextField
                      value={editedMessages[message._id]?.subject || ''}
                      onChange={(e) => handleInputChange(message._id, 'subject', e.target.value)}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                    />
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    <TextField
                      value={editedMessages[message._id]?.body || ''}
                      onChange={(e) => handleInputChange(message._id, 'body', e.target.value)}
                      variant="outlined"
                      multiline
                      fullWidth
                      rows={4}
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={messages.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: 'white' }}
      />
      <Box mt={2} display="flex" justifyContent="center">
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </MessageContainer>
  );
};

export default Message;
