import React, { useState } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';

export default function NavBar () {
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
  };
  
  return (
    <AppBar position='static' color='transparent'>
      <Tabs
        value={currentPage}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
  )
};