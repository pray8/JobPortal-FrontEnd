import React from 'react';
import { Jumbotron } from 'reactstrap';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title="Home | Job Portal";
    }, []);

    return (
        <div>
            <Jumbotron className="bg-dark">
                <h1 className="display-1 text-white">Job Portal</h1>
                <p className="text-white">Ultimate destination for job search and a must have for Recruiters</p>
            </Jumbotron>
        </div>
    )
}

export default Home;