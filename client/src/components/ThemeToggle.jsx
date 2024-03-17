import ThemeToggleCSS from '../assets/styled-components/ThemeToggleCSS';
import { useDashboardContext } from '../pages/DashboardLayout';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <ThemeToggleCSS onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className='toggle-icon'></BsFillSunFill>
      ) : (
        <BsFillMoonFill></BsFillMoonFill>
      )}
    </ThemeToggleCSS>
  );
};

export default ThemeToggle;
