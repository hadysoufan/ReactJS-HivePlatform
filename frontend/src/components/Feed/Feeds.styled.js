import styled from 'styled-components';

export const Feedz = styled.div`
  .feed {
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
    padding: ${({ theme }) => theme.spacing.cardPadding};
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .feed {
    .head {
      display: flex;
      justify-content: space-between;
    }
    .user {
      display: flex;
      gap: 1rem;
    }
    .photo {
      border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
      overflow: hidden;
      margin: 0.7rem 0;
    }
    .action-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;
      margin: 0.6rem;
    }
  }
  .liked-by {
    display: flex;
    span {
      width: 1.4rem;
      height: 1.4rem;
      display: block;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid ${({ theme }) => theme.colors.white};
      margin-left: -0.6rem;
      &:first-child {
        margin: 0;
      }
    }
    p {
      margin-left: 0.5rem;
    }
  }
`;
