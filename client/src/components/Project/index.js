import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Badge, Button } from 'react-bootstrap';

const Project = () => {
  return (
    <Col>
      {/* project card */}
      <Card className="shadow">
        <Card.Header className="bg-black bg-gradient text-white">
          {/* project title */}
          <Card.Title>
            Card Title
          </Card.Title>
          {/* project user info */}
          <Card.Subtitle className="text-white-50">
            Posted by randomuser on 10/06/22
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          {/* project tags */}
          <div>
            <Badge bg="primary">HTML</Badge>{' '}
            <Badge bg="danger">CSS</Badge>{' '}
            <Badge bg="warning" text="dark">JavaScript</Badge>{' '}
            <Badge bg="success">React</Badge>{' '}
            <Badge bg="info" text="dark">MERN</Badge>{' '}
            <Badge bg="secondary">MongoDB</Badge>{' '}
            <Badge bg="dark">MySQL</Badge>{' '}
          </div>
          <hr />
          {/* project description */}
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Accusantium, et pariatur. Deserunt amet voluptatum necessitatibus 
            officiis placeat deleniti nobis ipsa velit inventore? 
            Veritatis id, ex impedit fugiat reprehenderit aspernatur facilis.
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            {/* project number of comments */}
            <Card.Link 
              href="#" 
              className="text-decoration-none text-muted"
            >
              # of comments
            </Card.Link>

            {/* will need to fix placement later  */}

            <div>
              {/* link to deployed project */}
              <Button 
                href="#" 
                variant="primary" 
                className="me-2"
              >
                Go to project
              </Button>
              {/* link to project github */}
              <Button 
                href="#"
                variant="primary"
              >
                <i class="bi bi-github"></i>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Project;