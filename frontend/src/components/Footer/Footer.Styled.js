import styled from 'styled-components';

export const HomeFooter = styled.footer`
  background-color: #121315;
  color: #a7a7a7;
  font-size: 16px;

  .row {
    padding: 1em 1em;
  }
  .row.primary {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    align-items: stretch;
  }
  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    min-height: 15em;
  }
  h3 {
    width: 100%;
    text-align: left;
    color: white;
    font-size: 1.4em;
    white-space: nowrap;
    margin-bottom: 2.4rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      a {
        color: #a7a7a7;
        text-decoration: none;
        &:hover {
          color: ${({ theme }) => theme.colors.active};
        }
        &:visited {
          text-decoration: none;
        }
      }
    }
  }
  li {
    &:not(:first-child) {
      margin-top: 0.8em;
    }
  }
  .about {
    p {
      text-align: justify;
      line-height: 2;
      margin: 0;
    }
  }
  div.social {
    display: flex;
    justify-content: space-around;
    font-size: 2.4em;
    flex-direction: row;
    margin-top: 0.5em;
  }
  .social {
    i {
      color: ${({ theme }) => theme.colors.paragraph};
      &:hover {
        color: ${({ theme }) => theme.colors.active};
      }
    }
  }
  .copyright {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.active};
    font-size: 2rem;
    p {
      font-size: 0.9em;
      text-align: right;
    }
  }
  .footer-menu {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10px;
    p {
      color: #cfd2d6;
      padding: 6px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      &:hover {
        color: #27bcda;
      }
      &:visited {
        text-decoration: none;
      }
    }
  }
  .about-us {
    height: 100vh;
    width: 100%;
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.active};
  }
  .pic {
    height: auto;
    width: 30.2rem;
  }
  .about-2 {
    width: 113rem;
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .text {
    width: 54rem;
    h2 {
      font-size: 9rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    h5 {
      font-size: 2.2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
      letter-spacing: 0.1rem;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.backGround};
  }
  .about-container {
    height: 100vh;
    background: ${({ theme }) => theme.colors.headline};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 0.6rem;
    padding: 2rem 6rem 3rem 4rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-side {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
        position: relative;
      }
      .right-side {
        width: 75%;
        margin-left: 7.5rem;
      }
    }
  }
  .about-send-us {
    color: ${({ theme }) => theme.colors.backGround};
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  .content {
    .left-side {
      &::before {
        content: '';
        position: absolute;
        height: 70%;
        width: 0.2rem;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        background: ${({ theme }) => theme.colors.button};
      }
      .details {
        margin: 1.4rem;
        text-align: center;
        i {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.button};
          margin-bottom: 1rem;
        }
        .topic {
          font-size: 3rem;
          font-weight: 500;
        }
        .text-one {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.colors.paragraph};
        }
        .text-two {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.colors.paragraph};
        }
      }
    }
    .right-side {
      .topic-text {
        font-size: 2.3rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.button};
      }
    }
  }
  .right-side {
    .input-box {
      height: 5rem;
      width: 100%;
      margin: 1.2rem 0;
      input {
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1.6rem;
        background: #f0f1f8;
        border-radius: 0.6rem;
        padding: 0 1.5rem;
        resize: none;
      }
      textarea {
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1.6rem;
        background: #f0f1f8;
        border-radius: 0.6rem;
        padding: 0 1.5rem;
        resize: none;
        padding-top: 0.6rem;
      }
    }
    .message-box {
      min-height: 11rem;
    }
    .button {
      display: inline-block;
      margin-top: 12px;
      input[type='button'] {
        color: #fff;
        font-size: 18px;
        outline: none;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.button};
        cursor: pointer;
        transition: all 0.3s ease;
      }
    }
  }
  .button {
    input[type='button'] {
      &:hover {
        background: ${({ theme }) => theme.colors.active};
      }
    }
  }
`;
