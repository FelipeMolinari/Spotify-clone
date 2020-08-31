import React from 'react';
import SideBar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container } from './styles/components';
import GlobalStyle from './styles/global';
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <SideBar />
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
