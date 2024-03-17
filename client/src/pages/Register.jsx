import { Form, redirect, Link } from 'react-router-dom';
import RegisterCSS from '../assets/styled-components/RegisterCSS';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registraton Successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  return (
    <RegisterCSS>
      <Form method='post' className='form'>
        <Logo></Logo>
        <h4>Register</h4>
        <FormRow type='text' name='name'></FormRow>
        <FormRow type='text' name='lastName' labelText='Last Name'></FormRow>
        <FormRow type='text' name='location'></FormRow>
        <FormRow type='email' name='email'></FormRow>
        <FormRow type='password' name='password'></FormRow>
        <SubmitBtn></SubmitBtn>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </RegisterCSS>
  );
};

export default Register;
