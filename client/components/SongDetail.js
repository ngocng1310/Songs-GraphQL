import React, {Component} from 'react';
// integrate react and query
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default SongDetail;
