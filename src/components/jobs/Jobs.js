import React, { useEffect } from 'react'
import Job from './Job'
import SearchJob from './SearchJob'
import FilterJob from './FilterJob'
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../features/jobs/JobsSlice';



const Jobs = () => {

const dispatch = useDispatch()
const {jobs, isLoading, isError, isDeleting, searchKey, selectedType, sortingBy } = useSelector(state => state.jobs)

useEffect(()=>{
  dispatch(fetchJobs())
},[dispatch, isDeleting])

const jobSearchByTitle = (job) => job?.title?.toLowerCase()?.includes(searchKey);


const jobFilterByType = (job) => {
  if (selectedType === "all") {
    return true;
  }
  return job?.type === selectedType;
};


const sorting = (jobs) => {
  // Create a new array using slice() before sorting
  const sortedJobs = jobs.slice();

  if (sortingBy === 'lowToHigh') {
    sortedJobs.sort((a, b) => a?.salary - b?.salary);
  } else if (sortingBy === 'highToLow') {
    sortedJobs.sort((a, b) => b?.salary - a?.salary);
  }

  return sortedJobs;
};

let content;
if(isLoading) content = <p>'Loading.....'</p>
if(!isLoading && isError) content = <p>There was an error occured!</p>
if(!isLoading && !isError && jobs?.length > 0) content = sorting(jobs)?.filter(jobFilterByType).filter(jobSearchByTitle).map(job => <Job key={job.id} job={job} />)
if(!isLoading && !isError && jobs?.length === 0) content = <p>No Jobs Found</p>

  return (
    <main
          className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]"
        >
          <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
            <h1 className="lws-section-title">{`${selectedType === 'all' ? 'All Available' : selectedType} Jobs`}</h1>
            <div className="flex gap-4">
              <SearchJob />
              <FilterJob />
            </div>
          </div>

          <div className="jobs-list">
            
            {content}
            
          </div>
        </main>
  )
}

export default Jobs