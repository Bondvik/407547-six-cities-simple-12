import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {city} from './mocks/city';

const Setting = {
  Count: 5
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      count = {Setting.Count}
      offers = {offers}
      city = {city}
    />
  </React.StrictMode>,
);
