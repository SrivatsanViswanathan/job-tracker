import { Link, useRouteError } from 'react-router-dom';
import ErrorCSS from '../assets/styled-components/ErrorCSS';
import img from '../assets/images/not-found.svg';
import { Header } from '../components';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  // If page does not exist
  if (error.status === 404) {
    return (
      <ErrorCSS>
        <Header title='Error' description='Error'></Header>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh! Page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to='/dashboard' className='btn'>
            Dashboard
          </Link>
        </div>
      </ErrorCSS>
    );
  }

  // If page exists
  return (
    <ErrorCSS>
      <div>
        <h1>Error Page</h1>
        <Link to='/'>back home</Link>
      </div>
    </ErrorCSS>
  );
};

export default Error;
