
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import CarForm from './components/CarForm';

function App() {
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 23000 },
    // Add more car objects as needed
  ]);

  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" render={(props) => <CarList {...props} cars={cars} />} />
          <Route path="/details/:id" render={(props) => <CarDetails {...props} cars={cars} />} />
          <Route path="/add" render={(props) => <CarForm {...props} cars={cars} setCars={setCars} />} />
          {/* Add other routes for edit and delete pages */}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
