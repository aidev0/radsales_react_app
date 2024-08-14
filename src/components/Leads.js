import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, TablePagination } from '@mui/material';
import styled from '@emotion/styled';

// Styled components using Emotion
const LeadsContainer = styled(Box)`
  background-color: black;
  color: white;
  padding: 16px;
  width: 100%;
`;

const TableContainerStyled = styled(TableContainer)`
  background-color: #333;
`;

const Leads = ({ leads, keepCols }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = leads.map((lead) => lead._id);
      setSelected(newSelecteds);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  if (!leads || leads.length === 0) {
    return <div>No leads data available.</div>;
  }

  return (
    <LeadsContainer>
      <TableContainerStyled component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < leads.length}
                  checked={leads.length > 0 && selected.length === leads.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all leads' }}
                  sx={{ color: 'white' }}
                />
              </TableCell>
              <TableCell style={{ color: 'white' }}>Name</TableCell>
              {keepCols.filter(col => col !== 'name' && col !== 'url').map((col) => (
                <TableCell key={col} style={{ color: 'white' }}>
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((lead, index) => {
              const isItemSelected = isSelected(lead._id);
              const labelId = `enhanced-table-checkbox-${index}`;
              const rowColor = lead.is_lead_qualified_for_california_therapy ? 'green' : 'red';
              return (
                <TableRow
                  key={lead._id}
                  hover
                  onClick={(event) => handleClick(event, lead._id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                  style={{ backgroundColor: rowColor }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                      sx={{ color: 'white' }}
                    />
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    <a href={lead.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                      {lead.name}
                    </a>
                  </TableCell>
                  {keepCols.filter(col => col !== 'name' && col !== 'url').map((col) => (
                    <TableCell key={col} style={{ color: 'white' }}>
                      {lead[col] !== undefined && lead[col] !== null ? lead[col].toString() : ''}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={leads.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: 'white' }}
      />
    </LeadsContainer>
  );
};

export default Leads;
