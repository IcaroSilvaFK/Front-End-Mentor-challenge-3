import { useCallback, useState } from 'react';

import { Header } from './components/Header';
import { ContentCar } from './components/ContentCard';
import { MenuList } from './components/mobile/MenuList';

import { Container, ShadowContainer, Article } from './styles/home.styles';

function App() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpenMenuMobile(false), []);
  const handleOpenModal = useCallback(() => setIsOpenMenuMobile(true), []);

  return (
    <Container>
      <Header
        isOpenMenuMobile={isOpenMenuMobile}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
      <ShadowContainer />
      <Article>
        <ContentCar />
        <img
          src='/assets/illustration-devices.svg'
          alt='Illustration devices'
        />
      </Article>
      {isOpenMenuMobile && <MenuList />}
    </Container>
  );
}

export default App;
