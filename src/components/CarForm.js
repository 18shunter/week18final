
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const CarForm = ({ cars, setCars }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = cars.length + 1; // Generate a new ID for the car
    const newCar = { id, make, model, year, price };
    setCars([...cars, newCar]);
    history.push('/');
  };

  return (
    <div>
      <h2>Add Car</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formMake">
          <Form.Label>Make</Form.Label>
          <Form.Control type="text" value={make} onChange={(e) => setMake(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formModel">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CarForm;
