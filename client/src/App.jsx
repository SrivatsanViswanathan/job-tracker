import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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

// Dark Theme
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

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
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob></AddJob>,
            action: addJobAction,
          },
          {
            path: 'stats',
            element: <Stats></Stats>,
            loader: statsLoader,
          },
          {
            path: 'all-jobs',
            element: <AllJobs></AllJobs>,
            loader: allJobsLoader,
          },
          {
            path: 'profile',
            element: <Profile></Profile>,
            action: profileAction,
          },
          {
            path: 'admin',
            element: <Admin></Admin>,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob></EditJob>,
            loader: editJobLoader,
            action: editJobAction,
          },
          { path: 'delete-job/:id', action: deleteJobAction },
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
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
