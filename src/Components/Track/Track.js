import React from 'react';
import './Track.css';

export class Track extends React.Component {

render () {
//set isRemoval var here
let isRemoval;


    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}|{this.props.track.album}</p>
        </div>
        <a className="Track-action">{isRemoval ? '-' : '+' }</a>
      </div>
    );
  }
}