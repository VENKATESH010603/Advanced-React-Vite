// Gallery.js

import React from 'react';
import Navbar from '../navbar/Navbar';
import './Gallery.css'; // Import your CSS file for styling

export default function Gallery() {
  const source = [
    { link: "https://www.redveds.com/wp-content/uploads/2023/09/KB309828-2048x1386.jpg" },
    { link: "https://cdn0.weddingwire.in/vendor/1851/3_2/1280/jpg/img-20210127-wa0053_15_361851-161184145487743.webp" },
    { link: "https://cdn0.weddingwire.in/vendor/1851/original/1280/jpg/img-20210127-wa0051_15_361851-161184144741544.webp" },
    // { link: "https://cdn0.weddingwire.in/vendor/1851/original/1280/jpg/img-20210127-wa0034_15_361851-161184140371331.webp" },
    {link:"https://img.freepik.com/premium-photo/bride-groom-luxurious-young-couple-newlyweds-love-posing-first-family-wedding-photo-shoot_152625-10730.jpg?w=2000"}
  ];

  return (
    <div>
      <Navbar />
      <div>
        <center><h1 id='s-title'>Gallery</h1></center>
      </div>
      <div className='gallery-container'>
        {source.map((serv, index) => (
          <div key={index} className='gallery-card'>
            <img src={serv.link} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
