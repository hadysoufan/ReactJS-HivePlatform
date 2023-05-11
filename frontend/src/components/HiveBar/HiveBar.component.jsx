import React from 'react';
import HiveGlobal from '../styled/HiveGlobal.styled';
import Profile1 from '../../assets/img/profile-1.jpg';
import { HiveNav } from './HiveBar.styled';

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
              <label className="btn btn-primary" htmlFor="create-post">
                Create
              </label>
              <div className="profile-picture">
                <img src={Profile1} alt="" />
              </div>
            </div>
          </div>
        </nav>
      </HiveNav>
    </>
  );
}

export default HiveBar;
