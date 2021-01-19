import React, { Fragment, useEffect, useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from "../api/springbootapi";
import {toast} from 'react-toastify'

const PostJob=()=>{

    useEffect(() => {
        document.title="Post a Job | Job Portal";
    },[]);

    const [job, setJob] = useState( {} );

    //Form handel function.
    const onFormSubmission = (e) => {
        console.log(job);
        emptyAllFieldsAfterPosting();
        postDataToServer(job);
        e.preventDefault(); //So that Default functionality is not there.
    };

    const emptyAllFieldsAfterPosting = () => {
        document.getElementById("empty-all-fields").reset();
    }

    //Function to post data to server.
    const postDataToServer = (inputData) => {
        axios.post(`${base_url}`, inputData).then(
            (response) => {
                console.log(response);
                toast.success("Job Posted Successfully!");
            }, (error) => {
                console.log(error);
                toast.error("Error! Something went wrong")
            }
        )
    }

    return (
    <Fragment>
        <h2 className="my-2 text-white">Fill in the job details</h2>
        <br/>
        <Form onSubmit={onFormSubmission} id="empty-all-fields">
            <FormGroup row>
                <Label for="jobId" sm={2} className="text-white">Job Id</Label>
                <Col sm={10}>
                    <Input type="number" placeholder="Enter Job Id here" id="jobId" required
                        onChange = {(e) => {
                            setJob({...job, jobId:e.target.value})
                        }}
                        />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="companyName" sm={2} className="text-white">Company Name</Label>
                <Col sm={10}>
                    <Input type="text" placeholder="Enter Company Name here" id="companyName" required
                    onChange = {(e) => {
                        setJob({...job, companyName:e.target.value})
                    }}
                    />
                </Col>
            </FormGroup>    

            <FormGroup row>
                <Label for="jobTitle" sm={2} className="text-white">Job Title</Label>
                <Col sm={10}>
                    <Input type="text" placeholder="Enter Job Title here" id="jobTitle" required
                    onChange = {(e) => {
                        setJob({...job, jobTitle:e.target.value})
                    }}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="skillKeywords" sm={2} className="text-white">Skill Keywords</Label>
                <Col sm={10}>
                    <Input type="textarea" placeholder="Enter Skill Keywords here" id="skillKeywords" required
                    onChange = {(e) => {
                        setJob({...job, skillKeywords:e.target.value})
                    }}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="jobDescription" sm={2} className="text-white">Job Description</Label>
                <Col sm={10}>
                    <Input type="textarea" placeholder="Enter Job Description here" id="jobDescription" required
                    onChange = {(e) => {
                        setJob({...job, jobDescription:e.target.value})
                    }}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="location" sm={2} className="text-white">Location</Label>
                <Col sm={10}>
                    <Input type="text" placeholder="Enter Location here" id="location" required
                    onChange = {(e) => {
                        setJob({...job, location:e.target.value})
                    }}
                    />
                </Col>
            </FormGroup>
            <br/>
            <Button type="submit" style={{backgroundColor:"#2f4f4f", borderColor: '#ffffff'}}
            >Post Job / Update Existing Job with jobId</Button> <nbsp/>
            <Button type="reset" style={{backgroundColor:"#2f4f4f", borderColor: '#ffffff'}}>Clear</Button>
        </Form>
        <br/><br/>
    </Fragment>
    )
}

export default PostJob;