import { ACTIONS, OPERATIONS } from '../lib'

const initialState = {
  total: 0,
  operation: OPERATIONS.ADD,
  memory: 0,
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case OPERATIONS.ADD:
      return num1 + num2
    case OPERATIONS.MUL:
      return num1 * num2
    case OPERATIONS.SUB:
      return num1 - num2
    default:
      return null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      }

    case ACTIONS.CLEAR_NUMBER:
      return { ...state, total: initialState.total }

    case ACTIONS.APPLY_MEMORY:
      return { ...state, memory: state.total }

    case ACTIONS.CLEAR_MEMORY:
      return { ...state, memory: initialState.memory }

    case ACTIONS.CHANGE_OPERATION:
      return { ...state, operation: action.payload }

    default:
      return state
  }
}

export default reducer
export { initialState }
