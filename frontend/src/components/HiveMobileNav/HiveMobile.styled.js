import styled from 'styled-components';

export const Mobile = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    margin-bottom: 1rem;
    background-color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14%;
      font-size: 30px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      position: relative;
      &:last-child {
        border-right: none;
      }
    }
    i {
      font-size: 30px;
      color: ${({ theme }) => theme.colors.primary};
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.2);
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  
`;
