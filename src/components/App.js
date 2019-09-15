import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui/dist/semantic.min.css';
import StreamList from './strerams/StreamList';
import StreamCreate from './strerams/StreamCreate';
import StreamEdit from './strerams/StreamEdit';
import StreamDelete from './strerams/StreamDelete';
import StreamShow from './strerams/StreamShow';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
