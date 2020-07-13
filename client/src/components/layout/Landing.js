import React , { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../posts/Post";

import "../posts/post.scss";
import "./Landing.css";


const Landing = ({ allposts }) => {
  

  return (
    <div className="grid-container mx-3">
      {allposts.map((post) => (
        <Link to="/login">
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Landing;
