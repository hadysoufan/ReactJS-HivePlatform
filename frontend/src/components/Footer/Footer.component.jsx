import React from 'react';
import { Link } from 'react-router-dom';
import { HomeFooter } from './Footer.Styled';

function Footer() {
  return (
    <>
      <HomeFooter>
        <div className="row primary section">
          <div className="column about">
            <h3>Unite on Hive, Connect Now!</h3>
            <p>
              A brand-new social media platform called Hive combines the best
              elements of all the most popular social media sites. You may
              conduct video chats, shop, publish, like, and share stories while
              using Hive.
            </p>
            <div className="social">
              <Link
                to={'https://www.linkedin.com/in/hadi-soufan-b6011919a/'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link
                to={'https://medium.com/@hadisoufan'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-medium"></i>
              </Link>
              <Link
                to={'https://stackoverflow.com/users/20323360/hadi-soufan'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-stack-overflow"></i>
              </Link>
              <Link
                to={'https://www.instagram.com/hadi.a.soufan/'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to={'https://twitter.com/hadis0ufan'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to={'https://www.hackerrank.com/hady_A_soufan'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-hackerrank"></i>
              </Link>
              <Link
                to={'https://api.whatsapp.com/send?phone=+96176740521'}
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
          <div className="column links">
            <h3>About US</h3>
            <ul>
              <li>
                <Link
                  to={
                    'https://www.google.com/maps/search/?api=1&query=33.8938,35.5018'
                  }
                  target="_blank"
                  rel="noreferrer">
                  <i className="fas fa-map-marker-alt"></i> Beirut, Beirut
                  Governorate, Lebanon
                </Link>
              </li>
              <li>
                <Link to={'mailto:hady.a.soufan@gmail.com'}>
                  <i className="fas fa-envelope"></i> Hive Platform
                </Link>
              </li>
              <li>
                <Link to={'tel:+96176740521'}>
                  <i className="fas fa-phone"></i> +96176740521
                </Link>
              </li>
            </ul>
          </div>
          <div className="column links">
            <h3>Resources</h3>
            <ul>
              <li>
                <Link>F.A.Q</Link>
              </li>
              <li>
                <Link>Cookies Policy</Link>
              </li>
              <li>
                <Link>Terms Of Service</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
            </ul>
          </div>
          <div className="column subscribe">
            <h3>Newsletter</h3>
            <div className="input-group">
              <input
                type="email"
                className="input"
                id="Email"
                name="Email"
                placeholder="someone@test.com"
                autoComplete="off"
              />
              <input
                className="button--submit"
                value="Subscribe"
                type="submit"
              />
            </div>
          </div>
        </div>
      </HomeFooter>
    </>
  );
}

export default Footer;
