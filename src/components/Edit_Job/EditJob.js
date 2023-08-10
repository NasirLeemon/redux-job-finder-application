import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { updateJob } from '../../features/jobs/JobsSlice';
import { useNavigate } from 'react-router-dom';

const EditJob = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate()


  const { editingJob }  = useSelector(state => state.jobs)

 useEffect(()=>{
  const {id, title, type, salary } = editingJob || {}

  if(id){

    setTitle(title)
    setType(type)
    setSalary(salary)
    setDeadline(deadline)

  } else {
    reset()
  }

 },[editingJob, deadline])

  

const reset = () => {
  setTitle('')
  setType('')
  setSalary('')
  setDeadline('')
}


const handleUpdate = (e) => {
  e.preventDefault()
  dispatch(updateJob({
    id : editingJob.id,
    data : {
      title : title, 
      type : type,
      salary : salary,
      deadline : deadline
    }
  }))
  reset()
  navigate('/jobs')

}

  return (
    
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleUpdate}>
            <div className="fieldContainer">
              <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
              <select id="lws-JobTitle" value={title} onChange={(e)=>setTitle(e.target.value)} name="lwsJobTitle" required>
                <option value="" hidden selected>Select Job</option>
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
              <label htmlFor="lws-JobType">Job Type</label>
              <select id="lws-JobType" value={type} onChange={(e)=>setType(e.target.value)} name="lwsJobType" required>
                <option value="" hidden selected>Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                  placeholder="20,00,000" />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)} name="lwsJobDeadline" id="lws-JobDeadline" required />
            </div>

            <div className="text-right">
              <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                {editingJob?.id ? 'Update' : 'Edit'}
              </button>
            </div>
          </form>
        </div>
      </main>
   
  )
}

export default EditJob