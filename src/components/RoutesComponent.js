import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Campaigns from './Campaigns';
import Support from './Support';
import Pricing from './Pricing';
import Campaign from './Campaign';
import Message from './Message';
import PrivateRoute from './PrivateRoute';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/campaigns" element={<PrivateRoute component={Campaigns} />} />
    <Route path="/campaigns/:user_id" element={<PrivateRoute component={Campaigns} />} />
    <Route path="/campaign" element={<PrivateRoute component={Campaign} />} />
    <Route path="/campaign/:campaign_id" element={<PrivateRoute component={Campaign} />} />
    <Route path="/chat" element={<PrivateRoute component={Campaign} />} />
    <Route path="/chat/:campaign_id" element={<PrivateRoute component={Campaign} />} /> 
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/support" element={<PrivateRoute component={Support} />} />
    <Route path="/messages/:campaign_id" element={<PrivateRoute component={Message} />} />
  </Routes>
);

export default RoutesComponent;
