import axiosInstance from "../../utils/axios"

export const getFilteredJobs = async (type) => {
    const response = await axiosInstance.get(`/jobs/${type}`)
    return response.data

}