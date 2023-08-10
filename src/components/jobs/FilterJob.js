import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobSortChanged } from '../../features/jobs/JobsSlice'

const FilterJob = () => {
const { sortingBy } = useSelector(state => state.jobs)
  const dispatch = useDispatch()


const handleChange = (e) => {

  dispatch(jobSortChanged(e.target.value))
}
  
  return (
    <select
                id="lws-sort"
                name="sort"
                autoComplete="sort"
                className="flex-1"
                value={sortingBy}
                onChange={handleChange}
              >
                <option value='default'>Default</option>
                <option value='lowToHigh'>Salary (Low to High)</option>
                <option value='highToLow'>Salary (High to Low)</option>
              </select>
  )
}

export default FilterJob