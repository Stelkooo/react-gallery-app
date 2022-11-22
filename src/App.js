import React from "react";
import { Routes, Route } from "react-router-dom";
import apiKey from "./config";

// App Components
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoContainer />}>
          <Route path=":topic" element={<PhotoContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
