import React, { useState } from "react";
import { addJob } from "../../features/jobs/JobsSlice";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [title, setTitle] = useState("Software Engineer");
  const [type, setType] = useState("Full Time");
  const [salary, setSalary] = useState(10000);
  const [deadline, setDeadline] = useState("2023-08-07");


const dispatch = useDispatch()
const navigate = useNavigate()
const {isLoading, isError } = useSelector(state => state.jobs)


const handleCreate = (e) => {
  e.preventDefault()
    dispatch(addJob({
        title,
        type,
        salary,
        deadline,
    }))

    if (!isLoading && !isError) navigate('/jobs')
    
}



  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleCreate}>
          <div className="fieldContainer">
            <label
              for="lws-JobTitle"
              className="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select id="lws-JobTitle" name="lwsJobTitle" value={title} onChange={(e)=>setTitle(e.target.value)}  required>
              <option value="" hidden selected>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label for="lws-JobType">Job Type</label>
            <select id="lws-JobType" name="lwsJobType" value={type} onChange={(e)=>setType(e.target.value)} required>
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label for="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
              value={salary} 
              onChange={(e)=>setSalary(e.target.value)}
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label for="lws-JobDeadline">Deadline</label>
            <input
             value={deadline} 
             onChange={(e)=>setDeadline(e.target.value)}
              type="date"
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddJob;
