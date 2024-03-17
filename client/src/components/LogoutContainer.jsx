import LogoutContainerCSS from '../assets/styled-components/LogoutContainerCSS';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  const toggleButton = () => {
    setShowLogout(!showLogout);
  };

  return (
    <LogoutContainerCSS>
      <button type='button' className='btn logout-btn' onClick={toggleButton}>
        {user.avatar ? (
          <img src={user.avatar} alt='avatar' className='img'></img>
        ) : (
          <FaUserCircle></FaUserCircle>
        )}
        {user?.name}
        <FaCaretDown></FaCaretDown>
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </LogoutContainerCSS>
  );
};

export default LogoutContainer;
