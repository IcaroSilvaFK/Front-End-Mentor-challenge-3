import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};

  color: ${({ theme }) => theme.colors.lightGrayishBlue};
  text-transform: uppercase;

  padding: 6px 8px;

  font-size: 14px;

  border-radius: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;

  span {
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.grayishBlue};
    letter-spacing: 2px;
    z-index: 1;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.barlowCondensed};
  color: ${({ theme }) => theme.colors.darkBlue};
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const Content = styled.div`
  p {
    color: ${({ theme }) => theme.colors.grayishBlue};
  }

  padding: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
