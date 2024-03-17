import BigSideBarCSS from '../assets/styled-components/BigSideBarCSS';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import { useState } from 'react';

const BigSideBar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <BigSideBarCSS>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header className='logo'>
            <Logo></Logo>
          </header>
          <NavLinks isBigSidebar></NavLinks>
        </div>
      </div>
    </BigSideBarCSS>
  );
};

export default BigSideBar;
