import { FormRow, SubmitBtn } from '../components';
import DashboardFormPageCSS from '../assets/styled-components/DashboardFormPageCSS';
import {
  useOutletContext,
  useNavigation,
  Form,
  redirect,
} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { QueryClient } from '@tanstack/react-query';

export const profileAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');
    console.log(file);
    if (file && file.size > 500000) {
      toast.error('Image size too large');
      return null;
    }
    try {
      await customFetch.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('Profile updated successfully');
      redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
    return null;
  };

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  return (
    <DashboardFormPageCSS>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>profile</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='avatar' className='form-label'>
              Select an image file (max 0.5 MB)
            </label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              className='form-input'
              accept='image/*'
            />
          </div>
          <FormRow type='text' name='name' defaultValue={name}></FormRow>
          <FormRow
            type='text'
            name='lastName'
            labelText='last name'
            defaultValue={lastName}
          ></FormRow>
          <FormRow type='email' name='email' defaultValue={email}></FormRow>
          <FormRow
            type='text'
            name='location'
            defaultValue={location}
          ></FormRow>
        </div>
        <SubmitBtn formBtn></SubmitBtn>
      </Form>
    </DashboardFormPageCSS>
  );
};

export default Profile;
