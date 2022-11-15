import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserRouter,
    RouterProvider} from 'react-router-dom';
import Stay from './Stay';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'placetostay',
        element: <Stay />
    },
])


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);