import React, { useReducer } from 'react'
import TotalDisplay from './components/TotalDisplay'
import CalcButton from './components/CalcButton'
import reducer, { initialState } from './reducers'
import { actions } from './actions'
import { OPERATIONS, BUTTONS } from './lib'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = (e) => {
    const value = e.target.textContent

    switch (value) {
      case BUTTONS.ADD_MEMORY:
        return dispatch(actions.applyMemory(state.total))
      case BUTTONS.USE_MEMORY:
        return dispatch(actions.applyNumber(state.memory))
      case BUTTONS.CLEAR_MEMORY:
        return dispatch(actions.clearMemory())
      case OPERATIONS.ADD:
        return dispatch(actions.changeOperation(OPERATIONS.ADD))
      case OPERATIONS.MUL:
        return dispatch(actions.changeOperation(OPERATIONS.MUL))
      case OPERATIONS.SUB:
        return dispatch(actions.changeOperation(OPERATIONS.SUB))
      case BUTTONS.CLEAR_TOTAL:
        return dispatch(actions.clearNumner())
      default:
        return dispatch(actions.applyNumber(parseInt(value)))
    }
  }

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          <img width='40px' src='./Lambda-Logo-Red.png' alt='' /> Lambda Reducer Challenge
        </a>
      </nav>

      <div className='container row mt-5'>
        <div className='col-md-12 d-flex justify-content-center'>
          <form name='Cal'>
            <TotalDisplay value={state.total} />
            <div className='row details'>
              <span id='operation'>
                <b>Operation:</b> {state.operation}
              </span>
              <span id='memory'>
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className='row'>
              <CalcButton value={BUTTONS.ADD_MEMORY} onClick={handleClick} />
              <CalcButton value={BUTTONS.USE_MEMORY} onClick={handleClick} />
              <CalcButton value={BUTTONS.CLEAR_MEMORY} onClick={handleClick} />
            </div>

            <div className='row'>
              <CalcButton value={1} onClick={handleClick} />
              <CalcButton value={2} onClick={handleClick} />
              <CalcButton value={3} onClick={handleClick} />
            </div>

            <div className='row'>
              <CalcButton value={4} onClick={handleClick} />
              <CalcButton value={5} onClick={handleClick} />
              <CalcButton value={6} onClick={handleClick} />
            </div>

            <div className='row'>
              <CalcButton value={7} onClick={handleClick} />
              <CalcButton value={8} onClick={handleClick} />
              <CalcButton value={9} onClick={handleClick} />
            </div>

            <div className='row'>
              <CalcButton value={OPERATIONS.ADD} onClick={handleClick} />
              <CalcButton value={OPERATIONS.MUL} onClick={handleClick} />
              <CalcButton value={OPERATIONS.SUB} onClick={handleClick} />
            </div>

            <div className='row ce_button'>
              <CalcButton value={BUTTONS.CLEAR_TOTAL} onClick={handleClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
