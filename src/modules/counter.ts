// initialStateCreator
export function createInitialState() {
  return {
    current: 0,
  };
}

// actionType
export const INCREMENT = 'counter/increment' as const
export const DECREMENT = 'counter/decrement' as const

// actionCreator
export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export type Action = ReturnType<typeof increment | typeof decrement>;

// reducer
export default function reducer(state = createInitialState(), action: Action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        current: state.current + 1,
      }
    case DECREMENT:
      return {
        ...state,
        current: state.current - 1,
      }
    default:
      return state;
  }
}
