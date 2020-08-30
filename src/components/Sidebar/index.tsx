import React from 'react';
import { Container, NewPlaylist, AddIcon, Nav } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <span></span>
          </li>
          <li>
            <a href="">Navegar</a>
          </li>
          <li>
            <a href="">Radio</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Sua biblioteca</span>
          </li>

          <li>
            <a href="">Seu Daily Mix</a>
          </li>
          <li>
            <a href="">Músicas</a>
          </li>
          <li>
            <a href="">Álbuns</a>
          </li>
          <li>
            <a href="">Artistas</a>
          </li>
          <li>
            <a href="">Estações</a>
          </li>
          <li>
            <a href="">Arquivos locais</a>
          </li>
          <li>
            <a href="">Vídeos</a>
          </li>
          <li>
            <a href="">Podcasts</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>PLAYLISTS</span>
          </li>

          <li>
            <a href="">Melhores do rock</a>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <AddIcon />
        <span>Nova playlist</span>
      </NewPlaylist>
    </Container>
  );
};

export default Sidebar;
