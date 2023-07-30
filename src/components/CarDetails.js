
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  return (
    <div>
      <h2>Car Details</h2>
      {car ? (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{car.make} {car.model}</Card.Title>
            <Card.Subtitle>Year: {car.year}</Card.Subtitle>
            <Card.Text>Price: ${car.price}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Car not found.</p>
      )}
    </div>
  );
};

export default CarDetails;
