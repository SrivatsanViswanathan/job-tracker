import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import DashboardCSS from '../assets/styled-components/DashboardCSS';
import { BigSideBar, Navbar, SmallSideBar } from '../components';
import { createContext, useContext, useState } from 'react';
import { checkDefaultTheme } from '../App';
import customFetch from '../utils/customFetch';

const DashboardContext = createContext();

export const dashboardLoader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <DashboardCSS>
        <main className='dashboard'>
          <SmallSideBar></SmallSideBar>
          <BigSideBar></BigSideBar>
          <div>
            <Navbar></Navbar>
            <div className='dashboard-page'>
              <Outlet context={{ user }}></Outlet>
            </div>
          </div>
        </main>
      </DashboardCSS>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default DashboardLayout;
