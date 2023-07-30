
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Car List</h2>
      {cars.map((car) => (
        <Card key={car.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{car.make} {car.model}</Card.Title>
            <Card.Subtitle>Year: {car.year}</Card.Subtitle>
            <Card.Text>Price: ${car.price}</Card.Text>
            <Link to={`/details/${car.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
      <Link to="/add">
        <Button variant="success">Add Car</Button>
      </Link>
    </div>
  );
};

export default CarList;
