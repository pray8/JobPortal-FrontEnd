import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Job from "./Job";
import base_url from "../api/springbootapi";
import axios from "axios";

    const DisplayJobOpening = () => {

        const [allJobs, setJobs] = useState( [] );

        const removeDeletedJob = (jobIdToDelete) => {
            setJobs(allJobs.filter((oneJob) => oneJob.jobId !== jobIdToDelete));
        };

        useEffect(() => {
            document.title="Job Openings | Job Portal";
            getAllJobOpeningsFromServer();
        }, []);
    
        //Function to call the server (Here spring boot back-end server).
        const getAllJobOpeningsFromServer = () => {
            axios.get(`${base_url}`).then(
                (serverData) => {
                    console.log(serverData.data);
                    setJobs(serverData.data);
                },
                (error) => {
                    console.log(error);
                    toast.error("Something went wrong");
                }
            )
        };

    return (
        <div>
            <h2 className="text-white">Companies hiring right now</h2>
            <br/>
            {allJobs.length > 0 ? allJobs.map((item)  =>  <Job singleJob={item} updateArray={removeDeletedJob} />) : <div className="text-white">No Job Openings</div>}
            <ToastContainer/>
        </div>
    );
  };

  export default DisplayJobOpening;