import React from 'react';
import SideBar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
