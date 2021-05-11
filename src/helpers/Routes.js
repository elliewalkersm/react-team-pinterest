import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Boards from '../views/Boards';
import Pins from '../views/Pins';
import PrivateRoute from './PrivateRoute';
import SingleBoard from '../views/SingleBoard';

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
        <PrivateRoute exact path="/boards" component={() => <Boards user={user} />} user={user}/>
        <Route exact path="/boards/:id" component={() => <SingleBoard user={user} />} user={user}/>
        <PrivateRoute exact path="/pins" component={() => <Pins user={user} />} user={user}/>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
