import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';

const Introduction = () => {
  return (
    <Container className="home">
      <Row>
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <h2>Hi, I'm Karandeep Nagpal</h2>
          <p>
          I'm a Full Stack Developer driven by a passion for coding and a strong background in design, customer service, 
          and business management. My enthusiasm for finding innovative solutions to complex problems enables me to assist 
          companies and individuals in crafting exceptional products and experiences.
          </p>
          <p>
            Feel free to explore my portfolio to learn more about my work, skills, and projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
