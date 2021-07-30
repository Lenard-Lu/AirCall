import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './assets/css/app.css'
import './assets/css/body.css'
import './assets/css/header.css'
import './assets/css/feed.css'
import './assets/css/footer.css'
import './assets/css/detail.css'

import App from './components/App.jsx';

ReactDOM.render((   
<Provider store={store}>
      <HashRouter>
        <Switch>
          <Route component={App}></Route> 
        </Switch>
      </HashRouter>
</Provider>), document.getElementById('app'));