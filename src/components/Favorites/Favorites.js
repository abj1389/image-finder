import "./Favorites.css";
import React from "react";
import { ImagesContext } from "../../App";

const Favorites = () => {
    const { favorites, deleteImg } = React.useContext(ImagesContext);

    return (
        <div className="favorites">
            <h2>Guardadas como favoritas:</h2>
            <div className="favorites__container">
                {favorites.map(img =>
                <div key={img.id} className="card" onClick={() => deleteImg(img.id)}>
                    <img className="card__img" alt={img.alt} src={img.src.original} />
                    <p className="card__alt">{img.alt}</p>
                </div>)}
            </div>

        </div>
    );
}

export default Favorites;