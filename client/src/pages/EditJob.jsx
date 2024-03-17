import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import DashboardFormPageCSS from '../assets/styled-components/DashboardFormPageCSS';
import { useLoaderData, Form, redirect, useParams } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const editJobLoader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect('/dashboard/all-jobs');
  }
};

export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Job Edited Successfully');
    return redirect('/dashboard/all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const EditJob = () => {
  const { job } = useLoaderData();
  return (
    <DashboardFormPageCSS>
      <Form method='post' className='form'>
        <h4 className='form-title'>edit job</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            defaultValue={job.position}
          ></FormRow>
          <FormRow
            type='text'
            name='company'
            defaultValue={job.company}
          ></FormRow>
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            defaultValue={job.jobLocation}
          ></FormRow>
          <FormRowSelect
            name='jobStatus'
            labelText='job status'
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          ></FormRowSelect>
          <FormRowSelect
            name='jobType'
            labelText='job type'
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          ></FormRowSelect>
          <SubmitBtn formBtn></SubmitBtn>
        </div>
      </Form>
    </DashboardFormPageCSS>
  );
};

export default EditJob;
