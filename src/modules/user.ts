import { Dispatch } from 'redux';

interface User {
  id: number;
  name: string;
}

// initialStateCreator
export function createInitialState(): User[] {
  return [];
}

// actionType
const SET_USER = 'users/set' as const;

// actionCreator
export function setUsers(users: User[]) {
  return {
    type: SET_USER,
    payload: {
      users,
    },
  };
}

// redux-thunkで非同期通信データを含んだactionをdispatchに渡す
function retrieveUsers() {
  return async function (dispatch: Dispatch) {
    try {
      const response = await fetch('https://example.com/api/todo/')
      const todos = response.json();
      dispatch(setUsers(todos));
    }
    catch (e) {
      dispatch(setError(e));
    }
  };
}

type Action = ReturnType<typeof setUsers>;

// reducer
export default function reducer(state = createInitialState(), action: Action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.users;
      defalut:
      return state;
  }
}
