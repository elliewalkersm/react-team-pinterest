import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Boards from '../views/Boards';
<<<<<<< HEAD
// import Pins from '../views/Pins';
=======
import PrivateRoute from './PrivateRoute';
import SingleBoard from '../views/SingleBoard';
>>>>>>> 4c1ee43cfaf47036725b1a5d91feb938df6369fe
import BoardForm from '../views/BoardForm';

function Routes({
  user, boards, setBoards
}) {
  return (
    <div>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
        <Route exact path="/boards" component={() => <Boards user={user} />} />
        {/* <Route exact path="/pins" component={() => <Pins user={user} />} /> */}
        <Route exact path="/add-boards" component={() => <BoardForm user={user}/>}/>
=======
        <Route exact path="/" component={() => <Home user={user}/>} />
        <PrivateRoute exact path="/boards" component={() => <Boards user={user} boards={boards} setBoards={setBoards}/>} user={user}/>
        <PrivateRoute exact path="/boards/:id" component={() => <SingleBoard user={user} />} user={user}/>
        <PrivateRoute exact path="/add-boards" component={() => <BoardForm user={user} setBoards={setBoards}/>} user={user}/>
>>>>>>> 4c1ee43cfaf47036725b1a5d91feb938df6369fe
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
