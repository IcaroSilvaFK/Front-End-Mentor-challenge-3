import { Container } from './styles';

interface IBurguerIconProps {
  isOpenMenuMobile: boolean;
  handleCloseModal(): void;
  handleOpenModal(): void;
}

export function BurguerIcon({
  handleCloseModal,
  handleOpenModal,
  isOpenMenuMobile,
}: IBurguerIconProps) {
  function HandleCloseAndOpenMenuMobile() {
    if (isOpenMenuMobile) return handleCloseModal();
    handleOpenModal();
  }

  return (
    <Container onClick={HandleCloseAndOpenMenuMobile}>
      <img
        src={
          !isOpenMenuMobile
            ? '/assets/icon-hamburger.svg'
            : '/assets/icon-close.svg'
        }
        alt='hamburger'
      />
    </Container>
  );
}
