import React, { useState, useEffect } from 'react';
import * as img from '../../assets/js/images';
import NavBar from '../../components/NavBar/Navbar.component';
import Footer from '../../components/Footer/Footer.component';
import {testimonials} from '../../testimonials';
import './HomeScreen.styles.scss';

function HomeScreen() {
  // Loader functionality
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  // //////////////////////////////////////////

  // Scroll up functionality functionality
  const [showScroll, setShowScroll] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  // //////////////////////////////////////////

  // Testimonials functionality

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <>
      {/* Loader */}
      {isLoading ? (
        <div class="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <main>
          {/* scroll up btn */}
          <button className="scroll-up-btn" onClick={scrollTop}>
            ↑
          </button>

          <NavBar />
          {/* Hero Section */}
          <section className="section-hero" id="home">
            <div className="hero">
              <div className="hero-text-box">
                <p className="hero-sub">Join the Hive, Connect Now</p>
                <h1 className="heading-primary">
                  Discover the <span>Revolutionary</span> New Social Media App -
                  Hive!
                </h1>
                <p className="hero-description">
                  A brand-new social media platform called Hive combines the
                  best elements of all the most popular social media sites.
                </p>

                <div className="input-group input-group-pad">
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

                <div className="rating">
                  <img
                    src={img.RatingImg}
                    className="rating-stars"
                    alt="rating stars icons"
                  />
                  <p className="subheading">
                    "No matter where they are in the world, you can keep in
                    touch with the people you care about using Hive."
                  </p>
                  <p className="user-name">Hadi Soufan</p>
                  <span className="user-job">Web Developer</span>
                </div>
              </div>

              <div className="hero-img-box">
                <img className="hero-img" src={img.HeroImg} alt="social img" />
                <button className="scroll-down-btn">
                  <div className="scroll"> </div>
                </button>
              </div>
            </div>
          </section>

          {/* Feature Section */}
          <section className="section-featured section" id="feature">
            <div className="container">
              <h2 className="heading-featured-in">As featured in</h2>
              <div className="logos">
                <img src={img.TechCrunch} alt="Techcrunch logo" />
                <img src={img.BusinessInsider} alt="Business Insider logo" />
                <img src={img.NewYorkTimes} alt="The New York Times logo" />
                <img src={img.Forbs} alt="Forbes logo" />
                <img src={img.USAToday} alt="USA Today logo" />
              </div>
            </div>
          </section>

          {/* Why us section */}

          <section className="section-why section" id="why">
            <div className="container center-text">
              <h2 className="heading-secondary">Why Choose Us?</h2>
              <h2 className="subheading margin--bottom-md">
                Hive is an all-in-one social media platform that offers a
                convenient and secure way to stay connected with friends and
                family globally.
              </h2>
            </div>
            <div className="container grid grid--3-cols">
              <div className="card">
                <img
                  className="feature-img img--check"
                  src={img.PC}
                  alt="PC icon"
                />
                <p className="feature-title">All-in-One Platform</p>
                <p className="feature-text">
                  Hive combines the best features of all popular social media
                  platforms, making it an all-in-one solution for social
                  interaction, entertainment, and communication.
                </p>
              </div>
              <div className="card">
                <img
                  className="feature-img"
                  src={img.Privacy}
                  alt="Privacy and Security icon"
                />
                <p className="feature-title">Privacy and Security</p>
                <p className="feature-text">
                  Hive prioritizes the privacy and security of its users and has
                  been designed with these values in mind. You can trust that
                  your data is secure while using the platform.
                </p>
              </div>
              <div className="card">
                <img
                  className="feature-img"
                  src={img.Global}
                  alt="Global icon"
                />
                <p className="feature-title">Global Connectivity</p>
                <p className="feature-text">
                  With Hive, you can stay in touch with friends and family no
                  matter where they are in the world. It's a great way to stay
                  connected with loved ones and stay up-to-date on their lives.
                </p>
              </div>
            </div>
          </section>

          {/* About us section */}

          <section className="section-about section" id="about">
            <div className="container grid grid--2-cols grid--center-v">
              <div className="step-text-box">
                <h3 className="heading-tertiary">About US</h3>

                {/* 1 */}
                <p className="step-description">
                  With Hive, staying in touch with loved ones is easier than
                  ever. The platform provides a variety of communication options
                  such as talking with friends, conducting video chats, and even
                  editing your profile page. No matter where your friends and
                  family are located in the world, Hive makes it possible to
                  stay connected.
                </p>
                <button className="cta">
                  <span className="hover-underline-animation">Learn More</span>
                  <svg
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal">
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      data-name="Path 10"
                      id="Path_10"></path>
                  </svg>
                </button>
              </div>

              <div className="step-img-box">
                <img
                  className="step-img"
                  src={img.Mobile1}
                  alt="iphone mock up"
                />
              </div>

              {/* 2 */}
              <div className="step-img-box">
                <img
                  className="step-img"
                  src={img.Mobile2}
                  alt="iphone mock up"
                />
              </div>

              <div className="step-text-box">
                <h3 className="heading-tertiary">Social media features</h3>
                <p className="step-description">
                  Hive combines the best features of the most widely used social
                  media platforms. You can post, like, and share stories, as
                  well as upload content to other social media websites. The
                  platform also offers shopping options, making it easy to buy
                  and sell items online. With Hive, you can enjoy all the social
                  media features you love in one convenient place.
                </p>
                <button className="cta">
                  <span className="hover-underline-animation">
                    {' '}
                    Learn More{' '}
                  </span>
                  <svg
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal">
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      data-name="Path 10"
                      id="Path_10"></path>
                  </svg>
                </button>
              </div>

              {/* 3 */}
              <div className="step-text-box">
                <h3 className="heading-tertiary">Privacy and security</h3>
                <p className="step-description">
                  The creators of Hive designed the platform with privacy and
                  security in mind. You can be confident that your data is
                  secure when using Hive, giving you peace of mind while
                  interacting with others online. With Hive, you can enjoy
                  social interaction without sacrificing your privacy and
                  security.
                </p>
                <button className="cta">
                  <span className="hover-underline-animation">
                    {' '}
                    Learn More{' '}
                  </span>
                  <svg
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal">
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      data-name="Path 10"
                      id="Path_10"></path>
                  </svg>
                </button>
              </div>

              <div className="step-img-box step--img-box">
                <img
                  className="step-img"
                  src={img.Mobile3}
                  alt="iphone mock up"
                />
              </div>
            </div>
          </section>

          {/* Testimonals section */}
          <section className="section-3 center section" id="testimonial">
            <h2 className="heading-secondary test-heading">Testimonials</h2>
            <h2 className="subheading margin--bottom-md">
              Hive has made staying connected with loved ones a seamless and
              secure experience.
            </h2>
            <div className="testimonial-container">
              <div className="progress-bar"></div>
              <div className="fas fa-quote-right fa-quote"></div>
              <div className="fas fa-quote-left fa-quote"></div>
              <p className="testimonial">{currentTestimonial.text}</p>
              <div className="user">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  className="user-image"
                />
                <div className="user-details">
                  <h4 className="username">{currentTestimonial.name}</h4>
                  <p className="role">{currentTestimonial.position}</p>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      )}
    </>
  );
}

export default HomeScreen;
