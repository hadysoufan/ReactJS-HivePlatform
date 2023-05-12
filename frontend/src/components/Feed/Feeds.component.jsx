import React, { useEffect } from 'react';
import Profile1 from '../../assets/img/profile-1.jpg';
import Profile2 from '../../assets/img/profile-2.jpg';
import Profile3 from '../../assets/img/profile-3.jpg';
import { Feedz } from './Feeds.styled';
import { useDispatch, useSelector } from 'react-redux';
import { listFeeds } from '../../actions/feedActions';
import Loader from '../Loader';
import Message from '../Message';

import { Link } from 'react-router-dom';

function Feeds() {
  const dispatch = useDispatch();
  const feedList = useSelector((state) => state.feedList);

  const { error, loading, feeds } = feedList;

  useEffect(() => {
    dispatch(listFeeds());
  }, [dispatch]);

  console.log('loading:', loading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Feedz>
          {feeds.map((feed) => (
            <div className="feed" key={feed._id}>
              <div className="head">
                <div className="user">
                  <div className="profile-picture">
                    <img src={Profile1} alt="" />
                  </div>
                  <div className="info">
                    <h3>{feed.host.username}</h3>
                    <small>{feed.time_posted}</small>
                  </div>
                </div>
                <span className="edit">
                  <i className="uil uil-ellipsis-h"></i>
                </span>
              </div>

              <div className="photo">
                {feed.image && (
                  <Link to={`/hive/post/${feed._id}`}>
                    <img src={`/${feed.image}`} alt="" />
                  </Link>
                )}
              </div>

              <div className="action-button">
                <div className="interaction-buttons">
                  <span>
                    <i className="uil uil-heart"></i>
                  </span>
                  <span>
                    <i className="uil uil-comment-dots"></i>
                  </span>
                  <span>
                    <i className="uil uil-share-alt"></i>
                  </span>
                </div>
                <div className="bookmark">
                  <span>
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
                  <b>{feed.host.username}</b>
                  {feed.description && <span>{feed.description}</span>}
                  <span className="hashtag">#lifestyle</span>
                </p>
              </div>

              <div className="comments text-muted"> View all 277 comments</div>
            </div>
          ))}
        </Feedz>
      )}
    </>
  );
}

export default Feeds;
