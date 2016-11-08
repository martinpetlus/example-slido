import React from 'react';
import { connect } from 'react-redux';

function Question(props) {
  const { dispatch } = props;

  return (
    <div>
      {'Name: '}
      {props.name}
      {' / '}
      {props.text}
      {' - Likes:'}
      {props.likes}
      <button
        onClick={() => {
          dispatch({
            type: 'QUESTION_LIKE',
            id: props.id,
          })
        }}
      >
        Like
      </button>
    </div>
  );
}

export default connect()(Question);
