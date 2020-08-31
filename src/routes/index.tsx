import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/Browse';
import PlayList from '../pages/PlayList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Browse}></Route>
      <Route path="/playlists/:id" component={PlayList}></Route>
    </Switch>
  );
};

export default Routes;
