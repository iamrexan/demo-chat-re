import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="chat">
        <button className="btn btn-primary">Go to chat</button>
      </Link>
    </div>
  );
};

export default Home;
