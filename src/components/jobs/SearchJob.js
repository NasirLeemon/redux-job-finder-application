import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobSearch } from '../../features/jobs/JobsSlice'

const SearchJob = () => {
  const dispatch = useDispatch()

  const { searchKey } = useSelector(state => state.jobs)
  return (
    <div className="search-field group flex-1">
                <i
                  className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"
                ></i>
                <input
                onChange={(e)=>dispatch(jobSearch(e.target.value))}
                value={searchKey || ''}
                  type="text"
                  placeholder="Search Job"
                  className="search-input"
                  id="lws-searchJob"
                />
              </div>
  )
}

export default SearchJob