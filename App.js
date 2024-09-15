import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Chat from "./Chat";
import Translator from "./Translator";
import Faq from "./Faq";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
