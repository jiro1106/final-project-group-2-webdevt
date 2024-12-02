import React from 'react';
import '../css/TitleCard.css';

export const TitleCard = () => {
    return (
      <div className="title-card-container">
        <h1 className='services-header'>Events Handled</h1>
        <div className="title-card-wrapper">
          <div className="title-card card-birthdays">
              <h1>Birthdays</h1>
          </div>
          <div className="title-card card-corporate">
              <h1>Corporate Events</h1>
          </div>
          <div className="title-card card-wedding">
              <h1>Wedding Engagements</h1>
          </div>
          <div className="title-card card-anniversaries">
              <h1>Anniversaries</h1>
          </div>
          <div className="title-card card-social">
              <h1>Other Social Celebration</h1>
          </div>
        </div>
      </div>
    );
};
