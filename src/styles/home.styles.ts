import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 500px) {
    padding-bottom: 30px;
  }
`;

export const ShadowContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGrayishBlue};

  height: 500px;
  width: 700px;

  z-index: 0;

  position: absolute;

  top: 0;
  right: 0;

  border-bottom-left-radius: 100px;

  @media screen and (max-width: 500px) {
    height: 350px;
    width: 200px;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1200px;

  max-width: 1200px;

  height: 100%;

  margin: 0 auto;

  img {
    position: relative;
    width: 600px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    img {
      width: 320px;
    }
  }
`;
