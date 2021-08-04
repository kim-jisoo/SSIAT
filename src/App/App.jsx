import React, { useEffect, Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import {QuestionPage1 } from '../QuestionPage1';
import {QuestionPage2 } from '../QuestionPage2';
import {CongratsPage} from '../CongratsPage';
import {ConfirmPage} from '../ConfirmPage';
import {GroupPage} from '../GroupPage';

function App({component: Component, authed, ...rest}) {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div >
            <div>
                <div >
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/question-1" component={QuestionPage1} />
                            <Route path="/question-2" component={QuestionPage2} />
                            <Route path="/congrats" component={CongratsPage} />
                            <Route path="/confirm" component={ConfirmPage} />
                            <Route path="/group" component={GroupPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };