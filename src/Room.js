import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Room extends Component {
  render(props) {
    const { dispatch } = this.props;
    let input;

    return (
      <div className="Room">
        <input type="text" ref={(node) => input = node} />
        <button
          onClick={() => {
            dispatch({
              type: 'CREATE_ROOM',
              name: input.value,
            });
            browserHistory.push(`/${input.value}`);
          }}
        >
          Create room
        </button>
      </div>
    );
  }
}

export default connect()(Room);
