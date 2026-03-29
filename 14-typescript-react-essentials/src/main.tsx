// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import React from "react";

// import { Provider } from 'react-redux';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from "react-redux";
import store from './example/ReduxThunks/store.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

