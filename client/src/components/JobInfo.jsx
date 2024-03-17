import JobInfoCSS from '../assets/styled-components/JobInfoCSS';

const JobInfo = ({ icon, text }) => {
  return (
    <JobInfoCSS>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </JobInfoCSS>
  );
};

export default JobInfo;
