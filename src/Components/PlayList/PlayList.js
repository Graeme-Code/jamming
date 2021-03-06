import React from 'react';
import './PlayList.css';
//import TrackList component
import { TrackList } from '../TrackList/TrackList.js';

export class PlayList extends React.Component {
  constructor(props) {
  super(props);
  this.handleNameChange=this.handleNameChange.bind(this);
 }

handleNameChange(e) {
  this.props.onNameChange(e.target.value)
}

render () {

  return (
    <div className="Playlist">
      <input defaultValue={'New PlayList'} onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    );
  }
};
