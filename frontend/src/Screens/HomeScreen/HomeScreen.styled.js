import styled from 'styled-components';

// Loader style
export const Loader = styled.div`
  @-webkit-keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    30%,
    70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    30%,
    70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .honeycomb {
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
  }

  .honeycomb div {
    -webkit-animation: honeycomb 2.1s infinite backwards;
    animation: honeycomb 2.1s infinite backwards;
    background: ${({ theme }) => theme.colors.button};
    height: 12px;
    margin-top: 6px;
    position: absolute;
    width: 24px;
  }

  .honeycomb div:after,
  .honeycomb div:before {
    content: '';
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
  }

  .honeycomb div:after {
    top: -6px;
    border-bottom: 6px solid ${({ theme }) => theme.colors.button};
  }

  .honeycomb div:before {
    bottom: -6px;
    border-top: 6px solid ${({ theme }) => theme.colors.button};
  }

  .honeycomb div:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    left: -28px;
    top: 0;
  }

  .honeycomb div:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    left: -14px;
    top: 22px;
  }

  .honeycomb div:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    left: 14px;
    top: 22px;
  }

  .honeycomb div:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    left: 28px;
    top: 0;
  }

  .honeycomb div:nth-child(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    left: 14px;
    top: -22px;
  }

  .honeycomb div:nth-child(6) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    left: -14px;
    top: -22px;
  }

  .honeycomb div:nth-child(7) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    left: 0;
    top: 0;
  }
`;

// scroll up style
export const ScrollUp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  background: ${({ theme }) => theme.colors.button};
  color: black;
  width: 45px;
  height: 45px;
  opacity: 0.75;
  border: 1px solid ${({ theme }) => theme.colors.button};
  border-radius: 8px;
  cursor: pointer;
  animation: bounce_513 1s infinite;
  z-index: 1;

  @keyframes bounce_513 {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

// Hero Section styled

export const Hero = styled.section`
  padding: 2.8rem 0 9.6rem 0;
  background: ${({ theme }) => theme.colors.backGround};

  .hero-sub {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.headline};
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    margin-left: 4rem;
    padding: 0.2rem 4.2rem;
    border-radius: 25rem;
    width: fit-content;
    background-color: #e67b05;
  }

  .hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9.6rem;
    align-items: center;
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 3.2rem;
  }

  .heading-primary {
    
  }

  .hero-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem;
    padding: 0 4rem;
    color: ${({ theme }) => theme.colors.headline};
  }

  .hero-img {
    width: 100%;
  }

  .input-group {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    .input-group-pad {
      padding: 0 3.2rem;
    }

    .input {
      height: 5rem;
      width: 35rem;
      padding: 0 1.2rem;
      color: ${({ theme }) => theme.colors.headline};
      font-size: 1.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.active};
      border-radius: 0.6rem 0 0 0.6rem;
      background-color: transparent;

      &:focus {
        border-color: ${({ theme }) => theme.colors.button};
        outline: none;
      }

      &:focus-visible {
        border-color: ${({ theme }) => theme.colors.button};
        outline: none;
      }
    }
  }

  .button--submit {
    height: 5rem;
    padding: 0.2em 1em;
    border: none;
    border-radius: 0 0.4rem 0.4rem 0;
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.headline};
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.active};
    }
  }

  .rating {
    margin: 0 auto;
    padding: 0 3.2rem;

    .rating-stars {
      height: 12rem;
      margin-bottom: -2rem;
    }

    .user-name {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.paragraph};
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .user-job {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.span};
      text-transform: uppercase;
    }
  }
`;

/* ////////////////////// */
/* Scoll down Section */
export const ScrollDown = styled.button`
  width: 30px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.button};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.button};
  position: relative;
  margin-top: 5rem;
  cursor: pointer;

  &:after {
    content: 'Scroll Down';
    position: absolute;
    top: 140%;
    color: whitesmoke;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .scroll {
    width: 5px;
    height: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.backGround};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.active};
    animation: scroll_4013 2s linear infinite;
    transform: translateY(40%);
  }

  @keyframes scroll_4013 {
    0% {
      transform: translateY(40%);
    }

    50% {
      transform: translateY(90%);
    }
  }
`;

/* ////////////////////// */
/* Feature Section */
export const Feature = styled.section`
  padding: 4.8rem 0 3.2rem 0;
  background: ${({ theme }) => theme.colors.headline};

  .heading-featured-in {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.paragraph};
  }
  .logos {
    display: flex;
    justify-content: space-around;
    margin-bottom: 4.8rem;
    img {
      height: 3.2rem;
      filter: brightness(1);
      opacity: 50%;
    }
  }
`;

/* ////////////////////// */
/* Why us Section */
export const Why = styled.section`
  padding: 4em 0 10rem 0;

  .card {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.headline};
    box-shadow: 0 19px 38px rgba(255, 137, 6, 1),
      0 15px 12px rgba(255, 137, 6, 1);
    padding: 1.8rem 2rem;
  }
  .feature-img {
    display: block;
    height: auto;
    width: 15rem;
    padding: 1.6rem;
    margin: 1.4rem auto;
    line-height: 1.5;
  }
  .feature-title {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.backGround};
    font-weight: 700;
    margin-bottom: 1.6rem;
    text-align: center;
  }
  .feature-text {
    font-size: 1.8rem;
    line-height: 1.8;
    text-align: center;
    width: 103%;
    color: ${({ theme }) => theme.colors.paragraph};
  }
  .section-num {
    text-align: center;
    align-items: center;
    margin-top: 5rem;
  }
  .num-heading {
    font-size: 3.6rem;
  }
  .num-text {
    font-size: 1.6rem;
    text-align: center;
  }
  .container--num1 {
    margin-right: -5rem;
  }
  .container--num2 {
    margin-left: -5rem;
  }
`;

/* ////////////////////// */
/* About Section */
export const About = styled.section`
  padding: 9.6rem 0;
  background: ${({ theme }) => theme.colors.headline};

  .step-description {
    font-size: 1.8rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.paragraph};
  }
  .step-img-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      padding-bottom: 60%;
      background-color: ${({ theme }) => theme.colors.span};
    }
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 45%;
      padding-bottom: 45%;
      background-color: ${({ theme }) => theme.colors.active};
    }
  }
  .step-img {
    width: 18.9rem;
    height: 38.2rem;
    z-index: 1;
  }
  .cta {
    border: none;
    background: none;
    margin-top: 2.4rem;
    span {
      padding-bottom: 7px;
      letter-spacing: 4px;
      font-size: 14px;
      padding-right: 15px;
      text-transform: uppercase;
    }
    svg {
      transform: translateX(-8px);
      transition: all 0.3s ease;
    }
    &:hover {
      svg {
        transform: translateX(0);
      }
      .hover-underline-animation {
        &:after {
          transform: scaleX(1);
          transform-origin: bottom left;
          background-color: ${({ theme }) => theme.colors.button};
        }
      }
    }
    &:active {
      svg {
        transform: scale(0.9);
      }
    }
  }
  .hover-underline-animation {
    position: relative;
    color: ${({ theme }) => theme.colors.backGround};
    padding-bottom: 20px;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.active};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
  }
`;

/* ////////////////////// */
/* Testimonials Section */
export const Testimonials = styled.section`
  .testimonial-container {
    position: relative;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%);
    background-color: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.headline};
    border-radius: 1.5rem;
    margin: 2rem 1.4rem;
    padding: 5rem 8rem;
    max-width: 60rem;
    position: relative;
  }
  .fa-quote {
    color: rgba(255, 255, 255, 0.3);
    font-size: 2.8rem;
    position: absolute;
    top: 7rem;
  }
  .fa-quote-right {
    left: 40px;
  }
  .fa-quote-left {
    right: 40px;
  }
  .testimonial {
    line-height: 28px;
    text-align: justify;
    font-size: 2rem;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 400;
    .user-image {
      border-radius: 50%;
      height: 75px;
      width: 75px;
      object-fit: cover;
    }
    .user-details {
      margin-left: 10px;
    }
    .username {
      margin: 0;
    }
    .role {
      font-weight: normal;
      margin: 10px 0;
    }
  }
  .progress-bar {
    background-color: #fff;
    height: 4px;
    width: 100%;
    animation: grow 10s linear infinite;
    transform-origin: left;
  }
`;
