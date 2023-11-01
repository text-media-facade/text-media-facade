import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Display from "./pages/display";
import Common from "./pages/common/common";
import Dev from "./pages/dev/dev";
import Guest from "./pages/guest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display" element={<Display />} />
        <Route path="/common" element={<Common />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
    </Router>
  );
}

export default App;
