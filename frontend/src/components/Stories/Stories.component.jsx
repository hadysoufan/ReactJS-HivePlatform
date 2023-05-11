import React from 'react';
import {Stories} from './Stories.styled';
import Profile8 from '../../assets/img/profile-8.jpg'

function Story() {
  return (
    <>
      <Stories>
        <div className="story">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>
      </Stories>
    </>
  );
}

export default Story;
