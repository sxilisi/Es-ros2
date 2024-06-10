import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import GithubUser from "./assets/components/GithubUser";
import Welcome from "./assets/components/Welcome";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="users" element={<GithubUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
