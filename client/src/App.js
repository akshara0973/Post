import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Landing from "./components/landing";
// import SavedPost from "./components/SavedPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<CreatePost />} />
        {/* <Route path="/saved" element={<SavedPost />} /> */}
      </Routes>
    </div>
  );
}

export default App;
