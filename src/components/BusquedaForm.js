import React, { useState, useEffect } from 'react'

import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';


const BusquedaForm = props => {
    const [albumName, setAlbumName] = useState('');

    const searchHandler = event => {
        event.preventDefault();
        props.searchHandler(albumName);
    }

    const buttonDisabled = props.isLoading ? true : albumName === '' ? true : false;
    return (
        <Navbar bg="dark" expand="md">
            <Form onSubmit={searchHandler}>
                <InputGroup className="mb-2 mt-2">
                    <FormControl
                        placeholder="Buscar álbum"
                        value={albumName}
                        onChange={event => { setAlbumName(event.target.value) }} />

                    <InputGroup.Append>
                        <Button
                            variant="success"
                            type="submit"
                            disabled={buttonDisabled}>
                            {props.isLoading ? 'Buscando...' : 'Buscar'}
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </Navbar>
    );

}

export default BusquedaForm;