import React from "react";
import { Routes, Route } from "react-router-dom";

// App Components
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
import RouteNotFound from "./components/RouteNotFound";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoContainer />} />
        <Route path="cats" element={<PhotoContainer defaultTopic={"cats"}/>} />
        <Route path="dogs" element={<PhotoContainer defaultTopic={"dogs"}/>} />
        <Route path="birds" element={<PhotoContainer defaultTopic={"birds"}/>} />
        <Route path="search/:topic" element={<PhotoContainer />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
