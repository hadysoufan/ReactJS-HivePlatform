import React from 'react';
import { Messages } from './Message.style';
import Profile1 from '../../assets/img/profile-1.jpg';

function Message() {
  return (
    <>
      <Messages>
        <div className="heading">
          <h4>Messages</h4>
          <i className="uil uil-eidt"></i>
        </div>

        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="search messages"
            id="message-search"
          />
        </div>
        <div className="category">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="message-requests">Request(7)</h6>
        </div>
        {/* Message */}
        <div className="message">
          <div className="profile-picture">
            <img src={Profile1} alt="" />
            <div className="active"></div>
          </div>
          <div className="message-body">
            <h5>Hadi Soufan</h5>
            <p className="text-bold">2 new messages</p>
          </div>
        </div>

        <div className="message">
          <div className="profile-picture">
            <img src={Profile1} alt="" />
            <div className="active"></div>
          </div>
          <div className="message-body">
            <h5>Abir Zaiter</h5>
            <p className="text-bold">2 new messages</p>
          </div>
        </div>
      </Messages>
    </>
  );
}

export default Message;
