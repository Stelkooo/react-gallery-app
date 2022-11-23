import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

// App Components
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
import RouteNotFound from "./components/RouteNotFound";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const performSearch = (topic) => {
    axios({
      url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`,
      method: "get",
      timeout: 8000
    })
      .then(res => {
        setPhotos(
          res.data.photos.photo
        )
        // setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoContainer getPhotos={performSearch} photos={photos} />} />
        <Route path="cats" element={<PhotoContainer defaultTopic={"cats"} getPhotos={performSearch} photos={photos} />} />
        <Route path="dogs" element={<PhotoContainer defaultTopic={"dogs"} getPhotos={performSearch} photos={photos} />} />
        <Route path="birds" element={<PhotoContainer defaultTopic={"birds"} getPhotos={performSearch} photos={photos} />} />
        <Route path="search/:topic" element={<PhotoContainer getPhotos={performSearch} photos={photos} />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
