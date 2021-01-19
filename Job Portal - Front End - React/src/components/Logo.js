import React from 'react';
import job_portal from '../logo/job_portal.jpg';
import { Container, Card, CardImg } from 'reactstrap';

const Logo = () => {

    return (
        <Container>
            <h2 className="text-white">Search your dream job with Job Portal !</h2>
            <br/>
            <Card inverse>
                <CardImg width="100%" src={job_portal} alt="Card image cap" />
            </Card>
            <br/>
            <br/>
        </Container>
    );
};

export default Logo;