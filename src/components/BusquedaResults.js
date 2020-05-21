import React from 'react'
import Carousel from 'react-multi-carousel'
import { Card, Button } from 'react-bootstrap'

const BusquedaForm = props => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };

    const playHandler = (id) => {
        const url = `https://open.spotify.com/album/${id}`;
        window.open(url);
    }

    return (
        <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}>
            {
                props.albums.map(a => {
                    return (
                        <Card
                            style={{ width: '18rem' }}
                            key={a.id}>
                            <Card.Img
                                variant="top"
                                src={a.image} />

                            <Card.Body>
                                <Card.Title>{a.title}</Card.Title>
                                <Card.Text>
                                    <h4>{a.artists}</h4>
                                    {a.total_tracks} canciones
                                </Card.Text>
                                <Button
                                    variant="outline-success"
                                    onClick={_ => playHandler(a.id)}>
                                    Escuchar en Spotify
                                    </Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Carousel>
    );

}

export default BusquedaForm;