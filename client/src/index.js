import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    <BrowserRouter>
      <Switch>
        {/* Could put an element here above the routes and it would always be available, reguardless of route */}
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
