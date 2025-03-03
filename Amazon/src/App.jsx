// import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Router.jsx"; // Import the Routing component

// import DataContext from './DataContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
