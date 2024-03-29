import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import LoginCSS from '../assets/styled-components/LoginCSS';
import { FormRow, Header, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const loginAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Login Successful');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <LoginCSS>
      <Header
        title='Login'
        description='Access your account or explore the app with a demo account'
      ></Header>
      <Form method='post' className='form'>
        <Logo></Logo>
        <h4>Login</h4>
        <FormRow type='email' name='email'></FormRow>
        <FormRow type='password' name='password'></FormRow>
        <SubmitBtn></SubmitBtn>
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </LoginCSS>
  );
};

export default Login;
