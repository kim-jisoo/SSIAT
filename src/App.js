import React, {useEffect, } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import { PrivateRoute } from './components/PrivateRoute';

import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    });

  return (
    // <div className="jumbotron">
    //         <div className="container">
    //             <div className="col-md-8 offset-md-2">
    //                 {alert.message &&
    //                     <div className={`alert ${alert.type}`}>{alert.message}</div>
    //                 }
    //                 <Router history={history}>
    //                     <Switch>
    //                         <PrivateRoute exact path="/" component={HomePage} />
    //                         <Route path="/login" component={LoginPage} />
    //                         <Redirect from="*" to="/" />
    //                     </Switch>
    //                 </Router>
    //             </div>
    //         </div>
    //     </div>
    <LoginPage/>
  );
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);

export {connectedApp as App};
