import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import fakeData from '../../fakeData'
  

const Home = () => {
    const [volunteerData, setVolunteerData] = useState(fakeData)
    console.log(volunteerData)
    return (
        <div>
            <Container fluid>
            <Row>
                <Col md={3}></Col>
                <Col md={6} className="home__form">
                <div className="home__title ml-5">
                    <h3> I grow by helping people in need</h3>
                </div>
                <Form>
                    <Form.Row>
                    <Col>
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                        Name
                        </Form.Label>
                        <Form.Control
                        className="mb-2 home__input"
                        id="inlineFormInput"
                        placeholder="Search"
                        />
                    </Col>

                    <Col xs="auto">
                        <Button type="submit" className="mb-2 home__button">
                        Submit
                        </Button>
                    </Col>
                    </Form.Row>
                </Form>
                </Col>
            </Row>
        </Container> 
       
                {
                    volunteerData.map(dt => <VolunteerPage data={dt}></VolunteerPage>)
                }
        </div>
    );
};

export default Home;