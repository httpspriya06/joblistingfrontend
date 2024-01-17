import { useContext } from "react";
import JobContext from "../Context/JobContext";

function usejobContext() {
  return useContext(JobContext);
}

export default usejobContext;
