import "./Gallery.css";
import React from "react";
import { ImagesContext } from "../../App";

const Gallery = () => {
    const { gallery } = React.useContext(ImagesContext);
    const { addFavorite } = React.useContext(ImagesContext);

    return (
        <div className="gallery">
            {gallery ? <><h2>Resultados de la búsqueda:</h2>
                <div className="gallery__container">
                    {gallery?.photos?.map(photo =>
                        <div key={photo.id} className="card" onClick={() => addFavorite(photo)}>
                            <img className="card__img" src={photo.src.original} />
                            <p className="card__alt">{photo.alt}</p>
                        </div>
                    )}
                </div>
            </> : <p>Introduce un texto de búsqueda</p>}
        </div>
    );
}

export default Gallery;