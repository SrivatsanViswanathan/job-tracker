import logo4 from '../assets/logo4.png';
import LogoCSS from '../assets/styled-components/LogoCSS';
const Logo = () => {
  return (
    <LogoCSS>
      <img src={logo4} alt='jobify' className='logo' />
      <span className='logo'>
        <h3>Job Tracker</h3>
      </span>
    </LogoCSS>
  );
};

export default Logo;
