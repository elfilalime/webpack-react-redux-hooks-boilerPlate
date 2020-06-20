import * as React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Login from '../pages/Login'
import history from './history'

const AppRouter = () => {
    return  <div className="AppRouter">
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    </div>
}

export default AppRouter;