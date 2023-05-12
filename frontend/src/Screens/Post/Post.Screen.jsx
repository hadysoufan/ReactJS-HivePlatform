import React from 'react';
import Feed1 from '../../assets/img/feed-1.jpg';
import { PostContainer } from './Post.styled';
import { Link } from 'react-router-dom';

function PostScreen() {
  return (
    <>
      <PostContainer>
        <div className="post-feed">
          <h3>
            <Link to='/user-profile'>@Cleopatra</Link>
          </h3>
          <img className="post-image" src={Feed1} alt="" />

          <p className="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            enim dolore hic reiciendis dolorem iusto doloribus animi. Porro
            natus nam sit maiores neque, autem culpa dicta omnis facere sint.
          </p>

          <div className="comment-wrapper">
            <h3>Comments</h3>
            <div className="comment-container">
              <div className="comment-header">
                <small>4 min ago</small>
                <div className="dropdown">
                  <button className="dropbtn">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-content"></div>
                </div>
              </div>
              <p>Hello</p>
            </div>

            <div className="comment-form">
              <form action="" method="POST">
                <input
                  className="comment-input"
                  type="text"
                  name="body"
                  placeholder="write message here"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="activity-div">
          <h3 className="activity-title">Activity</h3>
          <hr />

          <div>
            <a className="activity-user">hadi SOufan</a>
            <p className="activity-body">hello</p>
          </div>
        </div>
      </PostContainer>
    </>
  );
}

export default PostScreen;
