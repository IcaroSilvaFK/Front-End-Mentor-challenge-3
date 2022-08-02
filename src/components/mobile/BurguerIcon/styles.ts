import styled from 'styled-components';

export const Container = styled.button`
  display: none;

  position: relative;

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
