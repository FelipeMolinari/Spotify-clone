import React from 'react';

import { Container, Search, User, SearchIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Search>
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </Search>
      <User>
        <img
          src="https://avatars0.githubusercontent.com/u/44385529?s=460&u=c8a1d528513e46dce6a4bb1d689155fa18b5f1d4&v=4"
          alt="user"
        />
        Felipe Molinari
      </User>
    </Container>
  );
};

export default Header;
