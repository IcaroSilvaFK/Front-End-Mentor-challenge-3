import styled, { css } from 'styled-components';

import { Variants } from './variants';

type ContainerProps = {
  variant: Variants;
};

export const Container = styled.button<ContainerProps>`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) =>
    variant === 'solid' &&
    css`
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.lightGrayishBlue};

      padding: 12px 20px;

      border-radius: 5px;
    `}
  ${({ variant }) =>
    variant === 'link' &&
    css`
      font-size: 1rem;
      font-weight: bold;
      :hover {
        color: ${({ theme }) => theme.colors.grayishBlue};
        text-decoration: underline;
      }
    `}
  ${({ variant }) => variant === 'ghost' && css``}
  ${({ variant }) => variant === 'outline' && css``}
`;
