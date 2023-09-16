import React from 'react';

import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import './index.css';

// Use createRoot to render your app
const root = document.getElementById('root');
const reactRoot = createRoot(root); // Use createRoot from 'react-dom/client'
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
