import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Home.css';
import homeImg from '../../Image/Vector_Art_for_excel.jpg';


const HomePage = () => {
    return (
        <div>
            <div className="diagonal-bg">
                <Container className="text-center main-header">
                    <h1 className="display-4 text-white title">Welcome to Faculty Management</h1>
                    <p className="lead text-white">
                        Manage all your data in one platform and enjoy seamless storage and organization.
                    </p>
                    <div>
                        <Button variant="primary" className="me-3 btn1">
                            Sign In
                        </Button>
                        <Button variant="secondary" className='btn2'>
                            Log In
                        </Button>
                    </div>
                </Container>
            </div>
            <div className="body">
                <div className="about-container">
                    
                    <div className="about-content">
                        <h1 className="display-4 about-title">About</h1>
                        <p className="lead">
                            This web application will help Faculty to maintain their important data in one platform
                            where they can easily access their data and update it whenever they want. The admin can get all the
                            information about the faculty, and mainly, this platform will help provide data for the committee.
                            The admin can generate all the data of the faculty in one Excel sheet dynamically and provide it to the committee with just one click.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={homeImg} alt=''/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomePage;
