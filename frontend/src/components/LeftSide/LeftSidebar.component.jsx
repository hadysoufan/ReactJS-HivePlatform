import React, { useState, useEffect } from 'react';
import Profile1 from '../../assets/img/profile-1.jpg';
import * as Left from './LeftSide.styled';
import { Link } from 'react-router-dom';

function LeftSidebar() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll('.menu-item');
    setMenuItems(items);
    items.forEach((item) => {
      item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
      });
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('click', () => {
          changeActiveItem();
          item.classList.add('active');
        });
      });
    };
  }, []);

  const changeActiveItem = () => {
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
  };
  return (
    <div>
      <Left.LeftSide>
        {/* Profile section */}
        <Link to="/profile" className="profile">
          <div className="profile-picture">
            <img src={Profile1} alt="" />
          </div>
          <div className="handle">
            <h4>Diana Ayi</h4>
            <p className="text-muted">@dayi</p>
          </div>
        </Link>

        {/* Side bar  */}
        <Left.SideBar>
          {/* Home link */}
          <Link to='/' className="menu-item active">
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
            <h3>Explore</h3>
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
