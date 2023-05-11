import React from 'react';
import Profile1 from '../../assets/img/profile-1.jpg';
import Profile2 from '../../assets/img/profile-2.jpg';
import Profile3 from '../../assets/img/profile-3.jpg';
import Feed1 from '../../assets/img/feed-1.jpg';
import {Feedz} from './Feeds.styled';

function Feeds() {
  return (
    <>
      <Feedz>
        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-picture">
                <img src={Profile1} alt="" />
              </div>
              <div className="info">
                <h3>Abir Zaiter</h3>
                <small>Beirut, 15 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>

          <div className="photo">
            <img src={Feed1} alt="" />
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span>
                {' '}
                <i className="uil uil-heart"></i>
              </span>
              <span>
                {' '}
                <i className="uil uil-comment-dots"></i>
              </span>
              <span>
                {' '}
                <i className="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                {' '}
                <i className="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img src={Profile1} alt="" />
            </span>
            <span>
              <img src={Profile2} alt="" />
            </span>
            <span>
              <img src={Profile3} alt="" />
            </span>
            <p>
              Liked by <b>Hadi Soufan</b> and <b>23433 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              {' '}
              <b>Melia Soufan</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat sed nam nullaquo.
              <span className="hashtag">#lifestyle</span>
            </p>
          </div>

          <div className=" comments text-muted"> View all 277 comments</div>
        </div>
      </Feedz>
    </>
  );
}

export default Feeds;
