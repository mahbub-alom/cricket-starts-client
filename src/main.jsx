import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToggleProvider } from './Provider/ToggleProvider';

const queryClient = new QueryClient()
  const globalStyles = {
    fontFamily: "PT Mono, monospace",
  };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={globalStyles}>
      <AuthProvider>
        <ToggleProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ToggleProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
