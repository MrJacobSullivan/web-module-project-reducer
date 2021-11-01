import { ACTIONS } from '../lib'

const actions = {
  applyNumber: (number) => {
    return { type: ACTIONS.APPLY_NUMBER, payload: number }
  },
  clearNumner: () => {
    return { type: ACTIONS.CLEAR_NUMBER }
  },
  applyMemory: () => {
    return { type: ACTIONS.APPLY_MEMORY }
  },
  clearMemory: () => {
    return { type: ACTIONS.CLEAR_MEMORY }
  },
  changeOperation: (operation) => {
    return { type: ACTIONS.CHANGE_OPERATION, payload: operation }
  },
}

export { actions }
