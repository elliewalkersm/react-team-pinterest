import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Boards from '../views/Boards';
import Pins from '../views/Pins';
import BoardForm from '../views/BoardForm';

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
        <Route exact path="/boards" component={() => <Boards user={user} />} />
        <Route exact path="/pins" component={() => <Pins user={user} />} />
        <Route exact path="/add-boards" component={() => <BoardForm user={user}/>}/>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
