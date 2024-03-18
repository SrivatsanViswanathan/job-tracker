import { Link } from 'react-router-dom';
import { Logo } from '../components';
import LandingCSS from '../assets/styled-components/LandingCSS';
import main from '../assets/images/target.svg';

const Landing = () => {
  return (
    <LandingCSS>
      <Header
        title='Home'
        description='Manage your job search process'
      ></Header>
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
              Manage your job search process. Track job applications, update
              application statuses, and organize your job search with ease. Stay
              on top of your career goals by efficiently managing your job
              application pipeline.
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
