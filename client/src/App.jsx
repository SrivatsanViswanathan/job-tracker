import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import Pages
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from './pages';

import { registerAction } from './pages/Register';
import { loginAction } from './pages/Login';
import { dashboardLoader } from './pages/DashboardLayout';
import { addJobAction } from './pages/AddJob';
import { allJobsLoader } from './pages/AllJobs';
import { editJobLoader, editJobAction } from './pages/EditJob';
import { deleteJobAction } from './pages/DeleteJob';
import { adminLoader } from './pages/Admin';
import { profileAction } from './pages/Profile';
import { statsLoader } from './pages/Stats';
import ErrorElement from './components/ErrorElement';

// Dark Theme
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

// React Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: 'register',
        element: <Register></Register>,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login></Login>,
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: <DashboardLayout queryClient={queryClient}></DashboardLayout>,
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddJob></AddJob>,
            action: addJobAction(queryClient),
          },
          {
            path: 'stats',
            element: <Stats></Stats>,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement></ErrorElement>,
          },
          {
            path: 'all-jobs',
            element: <AllJobs></AllJobs>,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement></ErrorElement>,
          },
          {
            path: 'profile',
            element: <Profile></Profile>,
            action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin></Admin>,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob></EditJob>,
            loader: editJobLoader(queryClient),
            action: editJobAction(queryClient),
          },
          { path: 'delete-job/:id', action: deleteJobAction(queryClient) },
        ],
      },
      {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
