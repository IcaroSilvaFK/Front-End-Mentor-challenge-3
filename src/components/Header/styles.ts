import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  max-width: 1100px;

  margin: 0 auto;

  padding: 30px 0;

  z-index: 1;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 20px 25px;
  }
`;

export const Nav = styled.nav`
  z-index: 1;

  display: flex;
  align-items: center;

  gap: 30px;

  ul {
    display: flex;
    align-items: center;

    gap: 20px;

    li {
      cursor: pointer;
      font-weight: bold;
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Bullet = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.grayishBlue};
`;
