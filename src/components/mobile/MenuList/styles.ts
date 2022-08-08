import styled from 'styled-components';

export const Container = styled.nav`
  display: none;
  @media screen and (max-width: 500px) {
    position: absolute;

    width: 200px;
    background: #fff;

    left: 50%;
    top: 80px;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 20px;

    padding: 20px 0;

    border-radius: 10px;

    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);

    z-index: 20;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;

      text-align: center;

      li {
        font-weight: bold;
        font-size: 1rem;
      }
    }

    button {
      font-weight: bold;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.grayishBlue};
      background: transparent;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 80%;

  margin: 0 auto;

  margin-top: 10px;

  background: ${({ theme }) => theme.colors.grayishBlue};
`;
