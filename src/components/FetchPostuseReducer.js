import {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading:false,
        error:'',
        post: action.payload
      }
    case 'FETCH_FAIL':
      return {
        loading: false,
        error: 'Oops. Something went wrong!',
        post: {}
      }
    default:
      return state
  }
}

const FetchPostuseReducer = () => {

   const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        const action = {
          type: 'FETCH_SUCCESS',
          payload: response.data
        }
        dispatch(action)
      })
      .catch(error => {
        dispatch({type: 'FETCH_FAIL'})
      })
    })
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title }
            {state.error? state.error : null}
        </div>
    )
}

export default FetchPostuseReducer
