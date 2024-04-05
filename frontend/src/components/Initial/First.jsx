import React, { useContext, useState } from "react";


const First = () => {
  return (
    <section id="home" style={{ height: '550px', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          background: "url('https://getwallpapers.com/wallpaper/full/4/0/0/654111.jpg')",
          height: '642px',
          top: '0px',
          left: '0px',
          width: '100%',
          zIndex: '-1',
          opacity: '0.89',
        }}
      ></div>
      <div className="container">
        <h1 style={{ color: 'black', fontSize: '3.5rem', marginTop: '30px', marginBottom: '20px', fontFamily: "'Bree Serif', serif" }}>
          <center>Welcome to <span>Offline Market</span></center>
        </h1>
        <p id="element"></p>
        <div className="search">
          <div className="search-container">
            <input type="text" id="location-search" placeholder="Search for a location..." />
            <button id="search-button">Search</button>
          </div>
          <div className="location-buttons">
            <button className="location-button">Hyderabad</button>
            <button className="location-button">Pune</button>
            <button className="location-button">Noida</button>
            <button className="location-button">Mathura</button>
            <button className="location-button">Delhi</button>
            <button className="location-button">Meerut</button>
            <button className="location-button">Bengal</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
