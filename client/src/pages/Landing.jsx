import { Link } from 'react-router-dom';
import { Logo } from '../components';
import LandingCSS from '../assets/styled-components/LandingCSS';
import main from '../assets/images/target.svg';

const Landing = () => {
  return (
    <LandingCSS>
      <nav>
        <Logo></Logo>
      </nav>
      <div className='container page'>
        <div className='slanted-background'>
          <div className='info'>
            <h1 className=''>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              earum in recusandae magni qui magnam. Blanditiis voluptate iste ut
              assumenda!
            </p>
            <Link to='/register' className='btn register-link'>
              Register
            </Link>
            <Link to='/login' className='btn '>
              Login / Demo User
            </Link>
          </div>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </LandingCSS>
  );
};

export default Landing;
