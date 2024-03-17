import { FaTimes } from 'react-icons/fa';
import SmallSideBarCSS from '../assets/styled-components/SmallSideBarCSS';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <SmallSideBarCSS>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes></FaTimes>
          </button>
          <header>
            <Logo></Logo>
          </header>
          <NavLinks></NavLinks>
        </div>
      </div>
    </SmallSideBarCSS>
  );
};

export default SmallSideBar;
