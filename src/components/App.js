import React, { useState } from 'react';
import BusquedaForm from './BusquedaForm';
import BusquedaResults from './BusquedaResults';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import Loader from './Loader';

function App() {
  const [searchAlbum, setSearchAlbum] = useState('');
  const [albumes, setAlbumes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const searchHandler = albumName => {
    setIsLoading(true);

    axios.get(`http://localhost:2000/find?q=${albumName}&limit=8`)
      .then(res => {
        const albums = [];

        const length = res.data.data.length;
        for (let i = 0; i < length; i++) {
          let album = res.data.data[i];
          albums.push(album)
        }
        setAlbumes(albums);
        setIsLoading(false);
      })

  }

  return (
    <>
      <BusquedaForm
        isLoading={isLoading}
        searchAlbum={searchAlbum}
        searchHandler={searchHandler}
      />
      <div className="content">
        {isLoading ?
          <Loader /> :
          <BusquedaResults
            albums={albumes}
          />
        }
      </div>
    </>
  );
}

export default App;
