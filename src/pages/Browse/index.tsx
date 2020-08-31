import React from 'react';

import { Container, Title, List, PlayList } from './styles';

const Browse: React.FC = () => {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <PlayList to="/playlists/1">
          <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"></img>
          <strong>Rap cabuloso</strong>
          <p>Relaxe enquanto você programa ouvindo o melhor do rock nacional</p>
        </PlayList>
        <PlayList to="/playlists/1">
          <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"></img>
          <strong>Rap cabuloso</strong>
          <p>Relaxe enquanto você programa ouvindo o melhor do rock nacional</p>
        </PlayList>
        <PlayList to="/playlists/1">
          <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"></img>
          <strong>Rap cabuloso</strong>
          <p>Relaxe enquanto você programa ouvindo o melhor do rock nacional</p>
        </PlayList>
        <PlayList to="/playlists/1">
          <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"></img>
          <strong>Rap cabuloso</strong>
          <p>Relaxe enquanto você programa ouvindo o melhor do rock nacional</p>
        </PlayList>
      </List>
    </Container>
  );
};

export default Browse;
