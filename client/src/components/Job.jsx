import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import JobCSS from '../assets/styled-components/JobCSS';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <JobCSS>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <h5>{company}</h5>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo
            icon={<FaLocationArrow></FaLocationArrow>}
            text={jobLocation}
          ></JobInfo>
          <JobInfo icon={<FaCalendarAlt></FaCalendarAlt>} text={date}></JobInfo>
          <JobInfo icon={<FaBriefcase></FaBriefcase>} text={jobType}></JobInfo>
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
        <footer className='actions'>
          <Link to={`/dashboard/edit-job/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form method='post' action={`/dashboard/delete-job/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              delete
            </button>
          </Form>
        </footer>
      </div>
    </JobCSS>
  );
};

export default Job;
