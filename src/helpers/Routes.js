import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Boards from '../views/Boards';
import PrivateRoute from './PrivateRoute';
import SingleBoard from '../views/SingleBoard';
import BoardForm from '../views/BoardForm';

function Routes({
  user, boards, setBoards
}) {
  return (
    <div className='content-containter'>
      <Switch>
        <Route exact path="/" component={() => <Home user={user}/>} />
        <PrivateRoute exact path="/boards" component={() => <Boards user={user} boards={boards} setBoards={setBoards}/>} user={user}/>
        <PrivateRoute exact path="/boards/:id" component={() => <SingleBoard user={user} />} user={user}/>
        <PrivateRoute exact path="/add-boards" component={() => <BoardForm user={user} setBoards={setBoards}/>} user={user}/>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  boards: PropTypes.array,
  setBoards: PropTypes.func,
};
export default Routes;
