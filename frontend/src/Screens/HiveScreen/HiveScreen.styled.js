import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  top: 5.4rem;
  .container {
    display: grid;
    grid-template-columns: 18vw auto 20vw;
    column-gap: 2rem;
    position: relative;
  }
`;

export const CreatePost = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 0.4rem ${({ theme }) => theme.spacing.cardPadding};
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  input[type='text'] {
    justify-self: start;
    width: 100%;
    padding-left: 1rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.danger};
    margin-right: 1rem;
  }
`;

export const Right = styled.div`
  height: max-content;
  position: sticky;
  top: ${({ theme }) => theme.spacing.stickyTopRight};
  bottom: 0;
`;
