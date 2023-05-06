import React, { useEffect, useRef } from 'react';
import './Navbar.styles.scss';
import LogoHeader from '../../assets/img/logo-header.png';

function NavBar() {
  const sectionHeroEl = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          document.body.classList.add('sticky');
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove('sticky');
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    obs.observe(sectionHeroEl.current);

    // cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => obs.unobserve(sectionHeroEl.current);
  }, []);

  return (
    <header className="header">
      <a href="#">
        <img className="logo" src={LogoHeader} alt="Hive logo" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#home" className="main-nav-link home-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="main-nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#testimonial" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li className="main-nav-line"></li>

          <li>
            <button className="btn-login">
              <a href='{% url "logout" %}'>Logout</a>
            </button>
          </li>
          <>
            <li>
              <button className="btn-login">
                <a href='{% url "login" %}'>Login</a>
              </button>
            </li>

            <li>
              <button className="btn-login">
                <a href='{% url "register" %}'>Sign Up</a>
              </button>
            </li>
          </>
        </ul>
      </nav>
      <div ref={sectionHeroEl}></div>
    </header>
  );
}

export default NavBar;
