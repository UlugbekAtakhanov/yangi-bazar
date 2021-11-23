import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {AppProvider} from "./context"
import "./index.scss"
import SimpleReactLightbox from 'simple-react-lightbox'





ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);


