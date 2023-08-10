import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createJob, editJob, getJobs, removeJob } from './JobsApi';

const initialState = {
    jobs : [],
    filteredJobs : [],
    searchKey : '',
    editingJob : {},
    isDeleting : false,
    selectedType : 'all',
    isLoading : false,
    isError : false,
    error : '',
    sortingBy : ''
}


export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (type) => {

    const jobs = await getJobs(type)
    return jobs

})


export const addJob = createAsyncThunk('jobs/addJob', async (data) => {

    const job = await createJob(data)
    return job

})

export const updateJob = createAsyncThunk('jobs/updateJob', async ({id, data}) => {

    const job = await editJob(id, data)
    return job

})

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id) => {

    const job = await removeJob(id)
    return job

})


const jobsSlice = createSlice({
    name : 'jobs',
    initialState,
    reducers : {
        getFilteredJobs : (state, action) => {
           state.selectedType = action.payload
            
        },
        editActive : (state, action) => {
            state.editingJob = action.payload
        },
        editInactive : (state) => {
            state.editingJob = { }
        },
        jobSearch : (state, action) => {
            state.searchKey = action.payload?.toLowerCase() || ""
        },
         jobSortChanged: (state, action) => {
         state.sortingBy = action.payload
    },

    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchJobs.pending, (state)=>{
            state.isLoading = true;
            state.isError = false
        })
        .addCase(fetchJobs.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false
            state.jobs = action.payload
            state.filteredJobs = action.payload
        })
        .addCase(fetchJobs.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true
            state.error = action.error.message
        })

        .addCase(addJob.pending, (state)=>{
            state.isLoading = true;
            state.isError = false
        })
        .addCase(addJob.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false
            state.jobs.push(action.payload)
        })
        .addCase(addJob.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true
            state.error = action.error.message
        })

        .addCase(updateJob.pending, (state)=>{
            state.isLoading = true;
            state.isError = false
        })
        .addCase(updateJob.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false
           const indextoUpdate = state.jobs.findIndex(job =>
                job.id === action.payload.id
            )

            state.jobs[indextoUpdate] = action.payload
            state.editingJob = {}
            
        })
        .addCase(updateJob.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true
            state.error = action.error.message
        })

        .addCase(deleteJob.pending, (state)=>{
            state.isLoading = true;
            state.isError = false
            state.isDeleting = true
        })
        .addCase(deleteJob.fulfilled, (state,action)=>{
            console.log(action.meta.arg, typeof action.meta.arg)
            state.isLoading = false;
            state.isError = false
            state.isDeleting = false
           state.jobs = state.jobs.filter(job => job?.id !== action.meta.arg)
            
        })
        .addCase(deleteJob.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true
            state.isDeleting = false
            state.error = action.error.message
        })
    }
})

export const { getFilteredJobs, editInactive, editActive, jobSearch, jobSortChanged } = jobsSlice.actions
export default jobsSlice.reducer