import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/Browse';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Browse}></Route>
    </Switch>
  );
};

export default Routes;
