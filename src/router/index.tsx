import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from '@/components/PrivateRoute';
import CONFIG from '@/config';
import routesMap from './routes';
import { DispatchProp, connect } from 'react-redux';
import { validateLocalStatus } from '@/store/actions/user';

const Routes: React.FC<DispatchProp> = function ({ dispatch }) {
  dispatch(validateLocalStatus());
  
  return (
    <Router basename={CONFIG.baseURL}>
      <Switch>
      {
        routesMap.map((route, idx) => (
          <PrivateRoute {...route} key={idx} />
        ))
      }
      </Switch>
    </Router>
  )
};

export default connect()(Routes);
