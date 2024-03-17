import NavbarCSS from '../assets/styled-components/NavbarCSS';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <NavbarCSS>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div className='nav-logo'>
          <Logo></Logo>
          <h4 className='logo-text'>Dashboard</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle></ThemeToggle>
          <LogoutContainer></LogoutContainer>
        </div>
      </div>
    </NavbarCSS>
  );
};

export default Navbar;
