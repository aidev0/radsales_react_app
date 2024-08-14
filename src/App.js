import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/Auth0ProviderWithHistory';
import RoutesComponent from './components/RoutesComponent';

const App = () => (
  <Router>
    <Auth0ProviderWithHistory>
      <RoutesComponent />
    </Auth0ProviderWithHistory>
  </Router>
);

export default App;
