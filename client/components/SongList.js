import React, {Component} from 'react';
// ggl is a helper to allow us to write  queries inside of a component
import gql from 'graphql-tag';
// use this lib to bond queries and components
import {graphql} from 'react-apollo';
// navigation links
import {Link} from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {

  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
    // wired up data to props by react-apollo
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        // react require unique key for each item in a list
        // this proj is already wired up with materialized css
        <li key={id} className="collection-item">
          {title}
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
        </li>
      )
    })
  }

  render() {
    if (this.props.data.loading) {return <div>Loading...</div>}
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
        <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong (id: $id) {
      id
    }
  }
`;
// this is a bonding
export default graphql(mutation) (
  graphql(query)(SongList)
);
