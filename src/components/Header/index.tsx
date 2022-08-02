import { Button } from '../Button';
import { BurguerIcon } from '../mobile/BurguerIcon';

import { Container, Nav, Bullet } from './styles';

interface IHeaderProps {
  isOpenMenuMobile: boolean;
  handleCloseModal(): void;
  handleOpenModal(): void;
}

export function Header({
  isOpenMenuMobile,
  handleCloseModal,
  handleOpenModal,
}: IHeaderProps) {
  return (
    <Container>
      <img src='/assets/logo.svg' alt='Logo Employe' />
      <Nav>
        <ul>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
        <Bullet />
        <Button variant='link'>Login</Button>
      </Nav>
      <BurguerIcon
        isOpenMenuMobile={isOpenMenuMobile}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
    </Container>
  );
}
