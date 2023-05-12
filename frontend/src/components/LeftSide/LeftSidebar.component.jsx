import React, { useEffect } from 'react';
import Profile1 from '../../assets/img/profile-1.jpg';
import * as Left from './LeftSide.styled';
import { Link } from 'react-router-dom';

function LeftSidebar() {
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event) => {
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove('active');
        });

        event.currentTarget.classList.add('active');
      });
    });
  }, []);

  return (
    <div>
      <Left.LeftSide>
        {/* Profile section */}
        <Link to="/hive/user-profile" className="profile">
          <div className="profile-picture">
            <img src={Profile1} alt="" />
          </div>
          <div className="handle">
            <h4>Abir Zaiter</h4>
            <p className="text-muted">@cleopatra</p>
          </div>
        </Link>

        {/* Side bar  */}
        <Left.SideBar>
          {/* Home link */}
          <Link to="/hive" className="menu-item active">
            <span>
              <i className="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </Link>

          {/* Explore link */}
          <Link className="menu-item">
            <span>
              <i className="uil uil-compass"></i>
            </span>
            <h3>Create Room</h3>
          </Link>

          {/* Message link */}
          <Link className="menu-item" id="messages-notifications">
            <span>
              <i className="uil uil-envelope-alt">
                <small className="notification-count">6</small>
              </i>
            </span>
            <h3>Messages</h3>
          </Link>

          {/* Bookmarks link */}
          <Link className="menu-item">
            <span>
              <i className="uil uil-bookmark"></i>
            </span>
            <h3>Bookmarks</h3>
          </Link>

          {/* Analytics link */}
          <Link className="menu-item">
            <span>
              <i className="uil uil-chart-line"></i>
            </span>
            <h3>Analytics</h3>
          </Link>

          {/* Theme link */}
          <Link className="menu-item">
            <span>
              <i className="uil uil-palette"></i>
            </span>
            <h3>Theme</h3>
          </Link>

          {/* Setting link */}
          <Link className="menu-item">
            <span>
              <i className="uil uil-setting"></i>
            </span>
            <h3>Settings</h3>
          </Link>
        </Left.SideBar>
        {/* end of side bar */}

        <label htmlFor="create-post" className="btn btn-primary">
          Create post
        </label>
      </Left.LeftSide>
    </div>
  );
}

export default LeftSidebar;
