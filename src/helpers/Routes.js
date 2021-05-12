import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Boards from '../views/Boards';
<<<<<<< HEAD
import PrivateRoute from './PrivateRoute';
import SingleBoard from '../views/SingleBoard';
=======
import Pins from '../views/Pins';
import BoardForm from '../views/BoardForm';
>>>>>>> development

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
<<<<<<< HEAD
        <PrivateRoute exact path="/boards" component={() => <Boards user={user} />} user={user}/>
        <PrivateRoute exact path="/boards/:id" component={() => <SingleBoard user={user} />} user={user}/>
        {/* <PrivateRoute exact path="/pins" component={() => <Pins user={user} />} user={user}/> */}
=======
        <Route exact path="/boards" component={() => <Boards user={user} />} />
        <Route exact path="/pins" component={() => <Pins user={user} />} />
        <Route exact path="/add-boards" component={() => <BoardForm user={user}/>}/>
>>>>>>> development
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
