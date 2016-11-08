import { combineReducers } from 'redux';

let questionId = 0;

export function questions(state = [], action) {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        {
          id: questionId++,
          name: action.name,
          likes: 0,
          text: action.text,
        }
      ];
    case 'QUESTION_LIKE':
      const question = state.find(q => q.id === action.id)
      const newQuestion = { ...question, likes: question.likes + 1 };
      const newState = state.filter(q => q.id !== question.id);
      newState.push(newQuestion);
      return newState;
    default:
      return state;
  }
}

export function room(state = '', action) {
  switch (action.type) {
    case 'CREATE_ROOM':
      return action.name;
    default:
      return state;
  }
}

const slido = combineReducers({
  room,
  questions,
});

export default slido;
