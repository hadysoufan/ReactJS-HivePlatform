import styled from 'styled-components';

/* ///////////////////////////////////// */
/* navbar style */
export const HiveNav = styled.section`
  .hive-bar {
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    padding: 0.7rem 0;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search-bar {
    input[type='search'] {
      &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
  .create {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .search-bar {
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.spacing.borderRadius};
    padding: ${({ theme }) => theme.spacing.searchPadding};
    input[type='search'] {
      background: transparent;
      width: 30vw;
      margin-left: 1rem;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;
