import React from 'react'

const BusquedaForm = props => {

    return (
        <div>
            {props.albums.map(a => {
                console.log(JSON.stringify(a));
                
                return (
                    <div key={a.id}>
                        <p>{a.name}</p>
                    </div>
                );
            })}
        </div>
    );

}

export default BusquedaForm;