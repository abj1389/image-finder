import './App.css';
import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Favorites from './components/Favorites/Favorites';

export const ImagesContext = React.createContext();

const initialState = {
  favorites: []
}

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_FAVORITE":
      const checkState = state.favorites.filter(img => img.id === action.payload.id);
      if (checkState.length === 0) {
        newState.favorites = [...state.favorites, action.payload]
      }
      break;
    case "DELETE__FAVORITE":
      newState.favorites = newState.favorites.filter(img => img.id !== action.payload);
      console.log(newState);
      break;
    default:
      console.error("Action type not supported");
  }

  return newState;
}

function App() {
  const [gallery, setGallery] = React.useState();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addFavorite = (photo) => {
    dispatch({ type: "ADD_FAVORITE", payload: photo });
  }

  const deleteImg = (id) => {
    dispatch({ type: "DELETE__FAVORITE", payload: id });
  }

  return (
    <div className="App">
      <ImagesContext.Provider value={{ gallery: gallery, setGallery: setGallery, favorites: state.favorites, addFavorite: addFavorite, deleteImg: deleteImg}}>
        <Header></Header>
        <div className="container">
          <Gallery></Gallery>
          <Favorites></Favorites>
        </div>
      </ImagesContext.Provider>

    </div>
  );
}

export default App;
