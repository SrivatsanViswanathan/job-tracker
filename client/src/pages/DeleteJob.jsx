import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const deleteJobAction =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job deleted successfully');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    return redirect('/dashboard/all-jobs');
  };

const DeleteJob = () => {
  return <h1>Delete Job</h1>;
};

export default DeleteJob;
