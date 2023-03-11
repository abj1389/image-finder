import "./SearchBar.css";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { ImagesContext } from "../../App";

const SearchBar = () => {
    const API_URL = "https://api.pexels.com/v1/search?query=";
    const PASSWORD = "RshAKckLqZDJRsQmcf51o4QfYzAJGAkvv9eFGvs9rNmZ6d87RGvCXpfl";

    const imgRef = React.useRef(null);
    const [fullUrl, setFullUrl] = React.useState();
    const [info] = useFetch(fullUrl, PASSWORD);
    const {setGallery} = React.useContext(ImagesContext);
    

    const onSubmit = (event, search) => {
        event.preventDefault();
        event.stopPropagation();
        search && setFullUrl(API_URL+search);
    }

    React.useEffect(() => setGallery(info), [info]);

    return (
        <div className="search-bar">
            <form onSubmit={event => onSubmit(event, imgRef.current.value)}>
                <input className="search-bar__input" ref={imgRef} type="text" placeholder="Introduce un texto de búsqueda"></input>
            </form>
        </div>
    );
}

export default SearchBar;