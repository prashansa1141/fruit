import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="services">
        <Link to="/chat">
          <button>Chatbot</button>
        </Link>
        <Link to="/translator">
          <button>Translator</button>
        </Link>
        <Link to="/faq">
          <button>FAQs</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
