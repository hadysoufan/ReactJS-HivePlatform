import styled from 'styled-components';

export const Section = styled.div`
  padding: 15rem 3rem;
  transition: transform 1s, opacity 1s;
`;

export const SectionHidden = styled.div`
  opacity: 0;
  transform: translateY(8rem);
`;

export const HeadingPrimary = styled.h1`
  font-size: 5.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;
  padding: 0 4rem;
  font-weight: 600;
  color: #fffffe;
  letter-spacing: -0.5px;

  span {
    color: ${({ theme }) => theme.colors.span};
  }
`;

export const HeadingSecondary = styled.h2`
  font-size: 4.2rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
  font-weight: 600;
  color: #fffffe;
  letter-spacing: -0.5px;
`;

export const HeadingTeritary = styled.h3`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.2rem;
  color: #0f0e17;
`;

export const SubHeading = styled.h2`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffedd3;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;
