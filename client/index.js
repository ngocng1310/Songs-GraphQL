import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
// react router to make links between pages
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// making requests for data and then storing the data
// locally when the response comes back
import ApolloClient from 'apollo-client';
// it is an integration layer between react and Apollo datasource
import {ApolloProvider} from 'react-apollo';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

//passing an emtpy object in
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
