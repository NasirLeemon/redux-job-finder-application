import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch ,useSelector } from 'react-redux'
import { getFilteredJobs } from "../../features/jobs/JobsSlice";
const Sidebar = () => {
  const location = useLocation()
  const { selectedType } = useSelector(state => state.jobs)
  const dispatch = useDispatch()

  const handleTypeChanged = (type) => {
    dispatch(getFilteredJobs(type))
    
  }
  

  return (
    <div className="sidebar">

      <ul className="space-y-4">
        <Link to='/jobs'
          id="lws-alljobs-menu"
          className={`main-menu ${selectedType === 'all' && 'menu-active'}`}
           >
          <i className="fa-solid fa-briefcase"></i>
          <span className={`${selectedType === 'all' && 'menu-active'}`} onClick={() => handleTypeChanged('all')} > All Available Jobs</span>
        </Link>
        <ul className="space-y-6 lg:space-y-2">
          <li className={`sub-menu ${selectedType === 'Internship' && 'menu-active'}`}

            id="lws-internship-menu" onClick={() => handleTypeChanged('Internship')}>

            <i  className={`fa-solid fa-stop !text-[#FF5757] ${selectedType === 'Internship' && 'menu-active'}`}></i>
            Internship

          </li>
          <li className={`sub-menu ${selectedType === 'Full Time' && 'menu-active' }`}

            id="lws-fulltime-menu"
            onClick={() => handleTypeChanged('Full Time')}>

            <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
            Full Time

          </li>
          <li className={`sub-menu ${selectedType === 'Remote' && 'menu-active' }`}
            
            id="lws-remote-menu"
            onClick={() => handleTypeChanged('Remote')}>

            <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
            Remote

          </li>
        </ul>

        <li>
          <Link to="/addjob" className={`main-menu ${location?.pathname === '/addjob' && 'menu-active'}`} id="lws-addJob-menu">
            <i className="fa-solid fa-file-circle-plus"></i>
            <span>Add NewJob</span>
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
