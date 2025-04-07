import React, { useState } from "react";
import CreatePost from "./components/CreatePost";
// import SavedPost from "./components/SavedPost";

function App() {
  // const [savedPosts, setSavedPosts] = useState([]);

  return (
    <div className="App">
      <CreatePost />
      {/* <SavedPost savedPosts={savedPosts} /> */}
    </div>
  );
}

export default App;

