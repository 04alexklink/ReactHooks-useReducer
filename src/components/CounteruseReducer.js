import {useReducer} from 'react'

const initialState = { firstCounter: 0}
const reducer = (state, action)=> {
  switch(action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { firstCounter: state.firstCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}
const CounteruseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
      <div>
        <h1>Count: {count.firstCounter}</h1>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment by 1</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement by 1</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment by 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement by 5</button>
      </div>
    )
}

export default CounteruseReducer