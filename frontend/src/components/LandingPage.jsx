import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="fill-head">Get Ready to Study Abroad</h1>
      <p className="fill-para">
        Welcome to uScholar, your gateway to a world of educational
        opportunities beyond borders. We believe that education knows no
        boundaries, and we are here to empower you to explore, learn, and thrive
        in a foreign land.
      </p>
      <p className="fill-para">
        Are you a student with a thirst for knowledge and a dream to see the
        world? Are you ready to embrace new cultures, forge lifelong
        friendships, and gain a global perspective that will set you apart in
        today's interconnected world? If so, you're in the right place.
      </p>
      <button className="fill-btn" onClick={() => navigate("/form")}>
        Fill the Form&nbsp;&nbsp;
        <i class="fa-solid fa-arrow-right fa-beat"></i>
      </button>
    </div>
  );
}

export default LandingPage
