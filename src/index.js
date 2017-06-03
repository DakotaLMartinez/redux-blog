import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';


import PostsIndex from './components/posts_index';
import PostShow   from './components/post_show';
import PostNew    from './components/post_new';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Header
        <Route path="/" component={PostsIndex} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/posts/new" component={PostNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
