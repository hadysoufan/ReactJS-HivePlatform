import styled from 'styled-components';

export const FriendRequest2 = styled.div`
  margin-top: 1rem;
  h4 {
    color: ${({ theme }) => theme.colors.gray};
    margin: 1rem 0;
  }

  .request {
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.cardPadding};
    border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
    margin-bottom: 0.7rem;
    .info {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .action {
      display: flex;
      gap: 1rem;
    }
  }
`;
