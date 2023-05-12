import styled from 'styled-components';

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 10rem;

  .post-image {
    width: 150%;
    height: auto;
    display: block;
  }
  .post-feed {
    width: 50%;
    height: 50vh;
    position: relative;
    left: 10%;
  }
  .caption {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .comment-wrapper {
    margin-top: 1rem;
  }
  .comment-container {
    display: inline;
  }
  .comment-form {
    margin-top: 20px;
  }
  .comment-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    resize: vertical;
    &:focus {
      outline: none;
      border-color: #1da1f2;
    }
  }
  .dropbtn {
    color: #ff8906;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      background-color: #b36004;
      color: #fff;
    }
  }
  .dropdown {
    position: relative;
    display: inline-block;
    &:hover {
      .dropdown-content {
        display: block;
        color: #ff8906;
      }
    }
  }
  .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    a {
      color: #ff8906;
      padding: 6px 0;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #fff;
        color: #ff8906;
      }
    }
  }
  .comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    small {
      font-size: 12px;
      color: #999;
    }
    .dropbtn {
      margin-right: 0;
    }
    .dropdown {
      position: static;
    }
  }
  .activity-div {
    background-color: #fff;
    padding: 20px;
    margin-right: 2rem;
    margin-top: 2rem;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .activity-title {
    margin-top: 0;
  }
  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
  }
  .activity-user {
    color: #1da1f2;
    &:hover {
      text-decoration: underline;
    }
  }
  .activity-body {
    margin: 10px 0;
  }
`;
