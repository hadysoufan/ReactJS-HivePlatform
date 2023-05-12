import React from 'react';
import Profile1 from '../../assets/img/profile-1.jpg';
import { HiveNav } from './HiveBar.styled';
import { Link } from 'react-router-dom';

function HiveBar() {
  return (
    <>
      <HiveNav>
        <nav className="hive-bar">
          <div className="container">
            <h2 className="logo">Hive</h2>
            <div className="search-bar">
              <i className="uil uil-search"></i>
              <input type="search" placeholder="search here" />
            </div>
            <div className="create">
              <Link
                to="/create-post"
                className="btn btn-primary"
                htmlFor="create-post">
                Create
              </Link>
              <Link to="/hive/user-profile">
                <div className="profile-picture">
                  <img src={Profile1} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </HiveNav>
    </>
  );
}

export default HiveBar;
