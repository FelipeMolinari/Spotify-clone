import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <SideBar />
          <Content>
            <Header />
            <Routes></Routes>
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
