import React, { useState } from 'react';
import BusquedaForm from './BusquedaForm';
import BusquedaResults from './BusquedaResults';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [albumes, setAlbumes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const searchHandler = albumName => {
    console.log("BUSCANDO");

  }

  return (
    <>
      <BusquedaForm
        isLoading={isLoading}
        searchHandler={searchHandler}
      />
      <Container fluid>
        <Row>
          <Col>
            <BusquedaResults />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
