import React from 'react';
import './Footer.styles.scss';

function Footer() {
  return (
    <>
      <footer>
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
              <a
                href="https://www.linkedin.com/in/hadi-soufan-b6011919a/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://medium.com/@hadisoufan"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-medium"></i>
              </a>
              <a
                href="https://stackoverflow.com/users/20323360/hadi-soufan"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-stack-overflow"></i>
              </a>
              <a
                href="https://www.instagram.com/hadi.a.soufan/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/hadis0ufan"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.hackerrank.com/hady_A_soufan"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-hackerrank"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+96176740521"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="column links">
            <h3>About US</h3>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=33.8938,35.5018"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fas fa-map-marker-alt"></i> Beirut, Beirut
                  Governorate, Lebanon
                </a>
              </li>
              <li>
                <a href="mailto:hady.a.soufan@gmail.com">
                  <i className="fas fa-envelope"></i> Hive Platform
                </a>
              </li>
              <li>
                <a href="tel:+96176740521">
                  <i className="fas fa-phone"></i> +96176740521
                </a>
              </li>
            </ul>
          </div>
          <div className="column links">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
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
      </footer>
    </>
  );
}

export default Footer;
