import React from 'react';
import './Projects.css';
import giftHubImage from '../../Assets/Gifthub.png';
import NoteTakerImage from '../../Assets/NoteTaker.png';
import QuizImage from '../../Assets/Quiz.png';
import TextEditorImage from '../../Assets/TextEditor.png';
import WeatherImage from '../../Assets/Weather.png';
import WhereImage from '../../Assets/Where.png';



export default function Projects() {
  return (
    <div className="catalog-container">
      <div className="catalog-row">
        <div className="catalog-item">
          <a href="https://github.com/scicluna/giftlist" target="_blank">
            <img src={giftHubImage} alt="Image 1" />
          </a>
          <h3>GiftHub</h3>
          <p>In this collaborative project, our team developed a comprehensive and user-friendly platform that consolidates 
            all your gift-giving plans into one easily accessible location. The website streamlines the process of organizing, 
            tracking, and managing your gifting ideas and events, ensuring a seamless and enjoyable experience.</p>
        </div>
        <div className="catalog-item">
          <a href="https://github.com/KDNagpal/Challenge_11_Note_Taker_V2" target="_blank">
            <img src={NoteTakerImage} alt="Image 2" />
          </a>
          <h3>Note Taker</h3>
          <p>Project building a simple note taker.</p>
        </div>
        <div className="catalog-item">
          <a href="https://github.com/KDNagpal/Challenge-4-Web-API-Quiz" target="_blank">
            <img src={QuizImage} alt="Image 3" />
          </a>
          <h3>Coding Quiz</h3>
          <p>Project builting a simple Quiz</p>
        </div>
      </div>
      <div className="catalog-row">
        <div className="catalog-item">
          <a href="https://github.com/KDNagpal/Challenge_19_Text_Editor" target="_blank">
            <img src={TextEditorImage} alt="Image 4" />
          </a>
          <h3>Text Editor</h3>
          <p>Project building a simple text editor.</p>
        </div>
        <div className="catalog-item">
          <a href="https://github.com/KDNagpal/Challenge-6-Weather-Forecast" target="_blank">
            <img src={WeatherImage} alt="Image 5" />
          </a>
          <h3>Weather Forcast</h3>
          <p>project building a simple 5 day weather forcaster.</p>
        </div>
        <div className="catalog-item">
          <a href="https://github.com/BrahmVanH/Where-Can-I-Watch" target="_blank">
            <img src={WhereImage} alt="Image 6" />
          </a>
          <h3>Where Can I Watch?</h3>
          <p>In this group project, we developed a website that enables users to search for movies and receive 
            suggestions for potential streaming platforms where they can watch the selected films. Additionally, 
            upon loading the site, the top 5 trending movies are prominently displayed for user convenience and engagement.</p>
        </div>
      </div>
    </div>
  );
}
