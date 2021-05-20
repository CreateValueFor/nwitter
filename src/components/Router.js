import React from 'react';
import {HashRouter as Router, Route,Switch} from "react-router-dom";
import Profile from 'routes/Profile';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from './Navigation';

const AppRouter =  ({refreshUser,isLoggedIn, userObj}) => {
    
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Switch>
                {isLoggedIn ? (
                 <div
                 style={{
                   maxWidth: 890,
                   width: "100%",
                   margin: "0 auto",
                   marginTop: 80,
                   display: "flex",
                   justifyContent: "center",
                 }}
               >
                <Route exact path="/">
                    <Home userObj={userObj}/>
                </Route>
                <Route exact path="/profile">
                    <Profile userObj={userObj}refreshUser={refreshUser}/>
                </Route>
                {/* "/"이 route에 있으면 상관 없지만 그 외의 route로 가게 되면 여기 '/'로 돌아가라는 의미 */}
                {/* <Redirect from="*" to="/"/> */}
                </div>
                ) : (
                <>
                <Route exact path="/">
                    <Auth/>
                </Route>
                {/* <Redirect from="*" to="/"/> */}
                </>
                )}
            </Switch>
        </Router>
    )
}
export default AppRouter;