import React from 'react';

import { Container, Header, SongList, ClockIcon, PlusIcon } from './styles';

const PlayList: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"></img>
        <div>
          <span>PLAYLIST</span>
          <h1>Samba no pé</h1>
          <p>13 músicas</p>
          <button>PLAY</button>
        </div>
      </Header>
      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th></th>
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <ClockIcon></ClockIcon>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <PlusIcon></PlusIcon>
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <PlusIcon></PlusIcon>
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <PlusIcon></PlusIcon>
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <PlusIcon></PlusIcon>
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <PlusIcon></PlusIcon>
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <PlusIcon></PlusIcon>
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
};

export default PlayList;
