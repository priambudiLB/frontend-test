import React from "react";
import "./App.css";
import GetSection from "./components/GetSection/view";
import PostSection from "./components/PostSection/view";


function App() {
  return (
    <div id="app" className="container my-3">
      <h3>React Axios example - netlify</h3>
      <GetSection />
      <PostSection />
    </div>
  );
}

export default App;
