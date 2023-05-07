import React from 'react';
import './Projects.css'; // Import the CSS file

export default function Projects() {
  return (
    <div className="catalog-container">
      <div className="catalog-row">
        <div className="catalog-item">
          <a href="/page1">
            <img src="image1.jpg" alt="Image 1" />
          </a>
          <h3>Title 1</h3>
          <p>Description of Image 1</p>
        </div>
        <div className="catalog-item">
          <a href="/page2">
            <img src="image2.jpg" alt="Image 2" />
          </a>
          <h3>Title 2</h3>
          <p>Description of Image 2</p>
        </div>
        <div className="catalog-item">
          <a href="/page3">
            <img src="image3.jpg" alt="Image 3" />
          </a>
          <h3>Title 3</h3>
          <p>Description of Image 3</p>
        </div>
      </div>
      <div className="catalog-row">
        <div className="catalog-item">
          <a href="/page4">
            <img src="image4.jpg" alt="Image 4" />
          </a>
          <h3>Title 4</h3>
          <p>Description of Image 4</p>
        </div>
        <div className="catalog-item">
          <a href="/page5">
            <img src="image5.jpg" alt="Image 5" />
          </a>
          <h3>Title 5</h3>
          <p>Description of Image 5</p>
        </div>
        <div className="catalog-item">
          <a href="/page6">
            <img src="image6.jpg" alt="Image 6" />
          </a>
          <h3>Title 6</h3>
          <p>Description of Image 6</p>
        </div>
      </div>
    </div>
  );
}
