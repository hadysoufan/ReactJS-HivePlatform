import React from 'react';
import { FriendRequest2 } from './Friends.styled';
import Profile8 from '../../assets/img/profile-8.jpg';

function Friends() {
  return (
    <FriendRequest2>
      <h4>Requests</h4>

      <div className="request">
        <div className="info">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <div>
            <h5>Melia Soufan</h5>
            <p className="text-muted">8 mutual friends</p>
          </div>
        </div>
        <div className="action">
          <button className="btn btn-primary">Accept</button>
          <button className="btn">Decline</button>
        </div>
      </div>

      <div className="request">
        <div className="info">
          <div className="profile-picture">
            <img src={Profile8} alt="" />
          </div>
          <div>
            <h5>Melia Soufan</h5>
            <p className="text-muted">8 mutual friends</p>
          </div>
        </div>
        <div className="action">
          <button className="btn btn-primary">Accept</button>
          <button className="btn">Decline</button>
        </div>
      </div>
    </FriendRequest2>
  );
}

export default Friends;
