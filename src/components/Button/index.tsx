import { ReactNode } from 'react';

import { Variants } from './variants';

import { Container } from './styles';

interface IButtonProps {
  children: ReactNode;
  variant: Variants;
}

export function Button({ children, variant }: IButtonProps) {
  return <Container variant={variant}>{children}</Container>;
}
