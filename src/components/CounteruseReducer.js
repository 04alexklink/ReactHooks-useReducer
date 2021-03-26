import {useReducer} from 'react'

const initialState = { 
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action)=> {
  switch(action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset1':
      return {...state, firstCounter: initialState.firstCounter}
    case 'reset2':
      return {...state, secondCounter: initialState.secondCounter}
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
        <div>
        <h1>First Counter Count: {count.firstCounter}</h1>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment by 1</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement by 1</button>
        <button onClick={() => dispatch({type: 'reset1'})}>Reset</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment by 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement by 5</button>
      </div>
      <div>
        <h1>Second Counter Count: {count.secondCounter}</h1>
        <button onClick={() => dispatch({type: 'increment2', value: 2})}>Increment by 2</button>
        <button onClick={()=> dispatch({type:'reset2'})}>Reset</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 2})}>Increment by 2</button>
      </div>
      <h1>Reset to initial State</h1>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset all buttons</button>
    </div>
    )
}

export default CounteruseReducer