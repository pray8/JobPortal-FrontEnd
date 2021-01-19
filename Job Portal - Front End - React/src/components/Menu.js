import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const Menu=()=>{
    return (
        <div>
            <ListGroup>
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="/" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Home</Link>
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="/job-openings" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Job Openings</Link>
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="/post-job" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Post a Job</Link>
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="#" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>About</Link>
            <Link className="list-group-item list-group-item-action text-white" tag="a" to="#" style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}} action>Contact us</Link>
            </ListGroup>
        </div>
        
    )
}

export default Menu;