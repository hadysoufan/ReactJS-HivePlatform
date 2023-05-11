import styled from 'styled-components';
import Story1 from '../../assets/img/story-1.jpg';
import Story2 from '../../assets/img/story-2.jpg';
import Story3 from '../../assets/img/story-3.jpg';
import Story4 from '../../assets/img/story-4.jpg';
import Story5 from '../../assets/img/story-5.jpg';
import Story6 from '../../assets/img/story-6.jpg';

export const Stories = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12rem;
  gap: 0.5rem;
  overflow-x: scroll;
  .story {
    padding: ${({ theme }) => theme.spacing.cardPadding};
    border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 0.75rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 5rem;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
      position: absolute;
      bottom: 0;
    }
    .name {
      z-index: 2;
    }
    &:nth-child(1) {
      background: url(${Story1}) no-repeat center center/cover;
    }
    &:nth-child(2) {
      background: url(${Story2}) no-repeat center center/cover;
    }
    &:nth-child(3) {
      background: url(${Story3}) no-repeat center center/cover;
    }
    &:nth-child(4) {
      background: url(${Story4}) no-repeat center center/cover;
    }
    &:nth-child(5) {
      background: url(${Story5}) no-repeat center center/cover;
    }
    &:nth-child(6) {
      background: url(${Story6}) no-repeat center center/cover;
    }
  }

  .story {
    .profile-picture {
      width: 2rem;
      height: 2rem;
      align-self: start;
      border: 3px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
