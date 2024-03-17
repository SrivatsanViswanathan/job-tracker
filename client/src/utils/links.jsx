import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'add job',
    path: '.',
    icon: <FaWpforms></FaWpforms>,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats></MdQueryStats>,
  },
  {
    text: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp></IoBarChartSharp>,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile></ImProfile>,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings></MdAdminPanelSettings>,
  },
];

export default links;
