import React, {Container, CardTitle, Card, CardText, Button} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/springbootapi';
import {toast} from 'react-toastify'

const Job = ( {singleJob, updateArray} ) => {
    
    const deleteJob = (jobIdToDelete) => {
        axios.delete(`${base_url}/${jobIdToDelete}`).then(
            (response) => {
                console.log(response);
                toast.success("Job Deleted Successfully!");
                updateArray(jobIdToDelete);
            }, (error) => {
                console.log(error);
                toast.error("Server Error! Job NOT Deleted");
            }
        );
    };

    return (
        <div>
            <Container>
                <Card body style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}}>
                    <CardTitle className="text-white" tag="h5">{singleJob.companyName}</CardTitle>
                    <CardText className="text-white">Role : {singleJob.jobTitle}</CardText>
                    <CardText className="text-white">Skills Required : {singleJob.skillKeywords}</CardText>
                    <CardText className="text-white">Job Description : {singleJob.jobDescription}</CardText>
                    <CardText className="text-white">Location : {singleJob.location}</CardText>
                    <Button href="https://forms.gle/Eyt9aQ4FDDB8HXB37" className="bg-success" style={{borderColor: '#ffffff'}}>Apply</Button>
                    <br/>
                    <Button className="bg-danger" style={{borderColor: '#ffffff'}}
                    onClick={() => {
                        console.log(singleJob.jobId);
                        deleteJob(singleJob.jobId);
                    }}
                    >Delete</Button>
                </Card>
                <br/><br/>
            </Container>
        </div>

    );
};

export default Job;