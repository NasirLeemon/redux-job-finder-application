export const getJobType = (type) =>
  type?.split(" ")?.join("_")?.toLowerCase() || "";