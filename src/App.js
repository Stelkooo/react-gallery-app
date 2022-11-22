import React from "react";

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
      <PhotoContainer />
    </div>
  );
}

export default App;
