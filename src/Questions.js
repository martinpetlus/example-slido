import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Questions extends Component {
  render() {
    const { dispatch } = this.props;

    let nameInput;
    let textInput;

    const sortedQuestions = ([...this.props.questions]).sort((a, b) => b.likes - a.likes);

    return (
      <div className="Questions">
        {sortedQuestions.map(q => <Question key={q.id} {...q} />)}
        <div>
          {'Name: '}
          <input ref={node => nameInput = node} />
          <br />
          {'Question: '}
          <textarea ref={node => textInput = node} />
          <br />
          <button
            onClick={() => {
              dispatch({
                type: 'ADD_QUESTION',
                name: nameInput.value,
                text: textInput.value,
              })
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Questions);
