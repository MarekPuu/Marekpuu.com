import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initGA } from './utils/analytics';

const trackingID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

if (typeof trackingID === 'string') {
  initGA(trackingID);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
