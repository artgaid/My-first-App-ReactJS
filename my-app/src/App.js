import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter/appRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
